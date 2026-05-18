export const defaultRenderedTextMinLength = 1000;

export function hasRenderedContent(text: string | undefined, minLength = defaultRenderedTextMinLength): boolean {
  return (text ?? "").trim().length >= minLength;
}
