export function getString(form: FormData, key: string): string {
  const value = form.get(key);
  if (typeof value != "string") {
    throw new Error(`Expected string value for ${key}`);
  }
  return value;
}
export function getOptionalString(form: FormData, key: string): string | null {
  const value = form.get(key);
  if (value == null) return value;
  if (typeof value != "string")
    throw new Error(`Expected string or null value for ${key}`);
  return value.trim() === "" ? null : value.trim();
}
