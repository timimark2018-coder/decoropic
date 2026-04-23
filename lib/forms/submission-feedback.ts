type FieldErrors = Record<string, string>;

type ValidationPayload = {
  error?: unknown;
  errors?: {
    formErrors?: unknown;
    fieldErrors?: Record<string, unknown>;
  };
};

function asString(value: unknown) {
  return typeof value === "string" && value.trim() ? value : "";
}

export function getFieldErrors(payload: unknown): FieldErrors {
  if (!payload || typeof payload !== "object") {
    return {};
  }

  const validationPayload = payload as ValidationPayload;
  const entries = Object.entries(validationPayload.errors?.fieldErrors || {});

  return Object.fromEntries(
    entries.flatMap(([key, value]) => {
      if (!Array.isArray(value)) {
        return [];
      }

      const message = value.find((item) => typeof item === "string" && item.trim());

      return message ? [[key, message]] : [];
    })
  );
}

function getFormError(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return "";
  }

  const validationPayload = payload as ValidationPayload;
  const formErrors = validationPayload.errors?.formErrors;

  if (!Array.isArray(formErrors)) {
    return "";
  }

  const firstFormError = formErrors.find((item) => typeof item === "string" && item.trim());

  return firstFormError ? String(firstFormError) : "";
}

export async function readSubmissionError(response: Response, fallbackMessage: string) {
  let payload: unknown = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  const fieldErrors = getFieldErrors(payload);
  const formError = getFormError(payload);
  const directError = payload && typeof payload === "object" ? asString((payload as ValidationPayload).error) : "";

  return {
    fieldErrors,
    message: formError || directError || Object.values(fieldErrors)[0] || fallbackMessage
  };
}
