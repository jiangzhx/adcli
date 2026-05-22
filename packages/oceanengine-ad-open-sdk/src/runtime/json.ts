const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);

export function parseJsonPreservingLargeIntegers(text: string): unknown {
  return JSON.parse(quoteUnsafeIntegerLiterals(text));
}

function quoteUnsafeIntegerLiterals(text: string): string {
  let output = "";
  let index = 0;

  while (index < text.length) {
    const char = text[index];
    if (char === '"') {
      const stringEnd = findStringEnd(text, index);
      output += text.slice(index, stringEnd);
      index = stringEnd;
      continue;
    }

    if (char === "-" || isDigit(char)) {
      const token = readNumberToken(text, index);
      if (token) {
        output += shouldQuoteIntegerToken(token.value) ? `"${token.value}"` : token.value;
        index = token.end;
        continue;
      }
    }

    output += char;
    index += 1;
  }

  return output;
}

function findStringEnd(text: string, start: number) {
  let escaped = false;
  let index = start + 1;
  while (index < text.length) {
    const char = text[index];
    if (escaped) {
      escaped = false;
    } else if (char === "\\") {
      escaped = true;
    } else if (char === '"') {
      return index + 1;
    }
    index += 1;
  }
  return text.length;
}

function readNumberToken(text: string, start: number): { value: string; end: number } | undefined {
  let index = start;
  if (text[index] === "-") {
    index += 1;
    if (!isDigit(text[index])) {
      return undefined;
    }
  }

  while (isDigit(text[index])) {
    index += 1;
  }

  if (text[index] === "." || text[index] === "e" || text[index] === "E") {
    index += 1;
    while (isNumberContinuation(text[index])) {
      index += 1;
    }
  }

  return { value: text.slice(start, index), end: index };
}

function shouldQuoteIntegerToken(token: string) {
  if (token.includes(".") || token.includes("e") || token.includes("E")) {
    return false;
  }
  const magnitude = token.startsWith("-") ? token.slice(1) : token;
  return BigInt(magnitude) > MAX_SAFE_INTEGER;
}

function isDigit(char: string | undefined) {
  return char != null && char >= "0" && char <= "9";
}

function isNumberContinuation(char: string | undefined) {
  return isDigit(char) || char === "+" || char === "-" || char === "." || char === "e" || char === "E";
}
