/**
 * Shared between the client form and the server action. Lives outside
 * `actions.ts` because a "use server" file may only export async functions —
 * exporting this type and constant from there fails the build.
 */
export type ContactFormState = {
  status: "idle" | "success" | "error" | "not_connected";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};
