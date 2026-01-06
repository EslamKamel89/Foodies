// export class FormValidationError extends Error {
//   constructor(public errors: Record<string, string>) {
//     super(JSON.stringify(errors));
//   }
// }

export function getString<T>(
  form: FormData,
  key: keyof T,
  errors: Partial<Record<keyof T, string>>
): string | null {
  if (typeof key != "string") {
    throw Error("key passed to getString must be string");
  }
  let value = form.get(key);
  if (typeof value != "string") {
    errors[key] = `${key} is required and must be string`;
    return null;
  }
  value = value.trim().toLowerCase();
  if (value === "") {
    errors[key] = `${key} can't be empty`;
    return null;
  }
  return value;
}

export function getOptionalString<T>(
  form: FormData,
  key: keyof T,
  errors: Partial<Record<keyof T, string>>
): string | null {
  if (typeof key !== "string") {
    throw Error("key passed to getOptionalString must be string");
  }

  const value = form.get(key);

  if (value == null) return null;

  if (typeof value !== "string") {
    errors[key] = `${key} must be a string`;
    return null;
  }

  const trimmed = value.trim().toLowerCase();

  if (trimmed === "") return null;

  return trimmed;
}

export function getFile<T>(
  form: FormData,
  key: keyof T,
  errors: Partial<Record<keyof T, string>>
): File | null {
  if (typeof key !== "string") {
    throw Error("key passed to getFile must be string");
  }

  const value = form.get(key);

  if (!(value instanceof File)) {
    errors[key] = `${key} is required`;
    return null;
  }

  if (value.size === 0) {
    errors[key] = `${key} must be a valid file`;
    return null;
  }

  return value;
}

export function getOptionalFile<T>(
  form: FormData,
  key: keyof T,
  errors: Partial<Record<keyof T, string>>
): File | null {
  if (typeof key !== "string") {
    throw Error("key passed to getOptionalFile must be string");
  }

  const value = form.get(key);

  if (value == null) return null;

  if (!(value instanceof File)) {
    errors[key] = `${key} must be a valid file`;
    return null;
  }

  if (value.size === 0) return null;

  return value;
}

export function getEmail<T>(
  form: FormData,
  key: keyof T,
  errors: Partial<Record<keyof T, string>>
): string | null {
  const email = getString<T>(form, key, errors);

  if (!email) return null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errors[key] = `${key as string} must be a valid email address`;
    return null;
  }

  return email;
}
