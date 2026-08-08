"use server";

import type { ContactFormState } from "@/components/contact/contact-form-state";

/**
 * Contact form submission handler.
 *
 * IMPORTANT — READ BEFORE WIRING THIS TO A REAL SITE:
 *
 * This validates and logs submissions, but does NOT send email anywhere yet.
 * No delivery provider (Resend, SendGrid, a webhook, etc.) has been chosen or
 * configured, and none is invented here — picking one and providing
 * credentials is James's call, not something to fabricate.
 *
 * Until CONTACT_FORM_WEBHOOK_URL (or another provider integration) is added
 * below and the corresponding environment variable is set, submissions are
 * only logged server-side, and the visitor is told plainly that the message
 * was not sent — never shown a false "success" state. That's a deliberate
 * choice: a contact form that silently swallows enquiries while claiming to
 * have sent them is worse than no form at all.
 *
 * To connect a real provider:
 *   1. Choose one (Resend is the least setup for a solo site).
 *   2. Add its SDK call in the marked block below.
 *   3. Set its API key as an environment variable (never commit it).
 *   4. Remove the `not_connected` early return.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Enter your name.";
  if (!email) fieldErrors.email = "Enter your email.";
  else if (!EMAIL_PATTERN.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!message) fieldErrors.message = "Enter a message.";
  else if (message.length < 10) fieldErrors.message = "Add a few more details so James has something to go on.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please fix the fields below.", fieldErrors };
  }

  // No delivery provider is configured. Log it so nothing is silently lost,
  // and tell the visitor honestly rather than claiming success.
  if (!process.env.CONTACT_FORM_WEBHOOK_URL) {
    console.log("[contact form] submission received, no delivery provider configured:", {
      name,
      email,
      message,
    });
    return {
      status: "not_connected",
      message:
        "Thanks for writing — but this form isn't connected to email delivery yet, so your message was not sent. Please try again later, once a way to reach James directly is added here.",
    };
  }

  // --- Real delivery goes here once CONTACT_FORM_WEBHOOK_URL is set. ---
  // Example:
  // await fetch(process.env.CONTACT_FORM_WEBHOOK_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, message }),
  // });

  return {
    status: "success",
    message: "Thanks — your message has been sent. James will get back to you soon.",
  };
}
