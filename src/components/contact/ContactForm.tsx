"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/about/actions";
import { initialContactFormState } from "./contact-form-state";

/**
 * A real contact form — not a "coming soon" placeholder. Name, email, and
 * message, with server-side validation and an honest result message.
 *
 * See `about/actions.ts` for why success is not guaranteed: no email
 * delivery provider is configured yet, so a submission today is validated
 * and logged, and the visitor is told plainly that nothing was sent, rather
 * than shown a false confirmation.
 */
export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialContactFormState);

  return (
    <form action={formAction} noValidate className="mt-8 max-w-[520px]">
      <div className="flex flex-col gap-5">
        <Field
          id="contact-name"
          name="name"
          label="Name"
          type="text"
          autoComplete="name"
          error={state.fieldErrors?.name}
        />
        <Field
          id="contact-email"
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          error={state.fieldErrors?.email}
        />
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="text-sm font-medium text-black">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            aria-invalid={state.fieldErrors?.message ? "true" : undefined}
            aria-describedby={state.fieldErrors?.message ? "contact-message-error" : undefined}
            className="rounded-[var(--radius-sm)] border border-[var(--border-card)] bg-white/70 px-4 py-3 text-[0.95rem] text-black outline-none transition-colors duration-150 focus:border-gold aria-[invalid=true]:border-red-400"
          />
          {state.fieldErrors?.message ? (
            <p id="contact-message-error" className="text-sm text-red-700">
              {state.fieldErrors.message}
            </p>
          ) : null}
        </div>
      </div>

      <SubmitButton />

      {state.status !== "idle" && state.status !== "error" ? (
        <p
          aria-live="polite"
          className={[
            "mt-5 max-w-[46ch] text-sm leading-relaxed",
            state.status === "success" ? "text-black" : "text-gold-dark",
          ].join(" ")}
        >
          {state.message}
        </p>
      ) : null}

      {state.status === "not_connected" && state.mailto ? (
        <a
          href={state.mailto}
          className="mt-4 inline-flex h-[47px] items-center rounded-[var(--radius-sm)] border border-gold-dark bg-white/70 px-6 text-[0.95rem] font-semibold text-black transition-colors duration-150 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark"
        >
          Open in my email app
        </a>
      ) : null}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type,
  autoComplete,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  autoComplete: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-black">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="h-11 rounded-[var(--radius-sm)] border border-[var(--border-card)] bg-white/70 px-4 text-[0.95rem] text-black outline-none transition-colors duration-150 focus:border-gold aria-[invalid=true]:border-red-400"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-7 inline-flex h-[47px] items-center gap-2.5 rounded-[var(--radius-sm)] bg-[linear-gradient(180deg,var(--gold-grad-from),var(--gold-grad-to))] px-6 text-[0.95rem] font-semibold text-black shadow-[0_1px_2px_rgba(60,45,20,0.18)] transition-[filter] duration-150 hover:brightness-[1.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}
