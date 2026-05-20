const asciiTokenPattern = /[a-z0-9][a-z0-9_./:-]*/g;
const cjkCharPattern = /[\u3400-\u9fff]/;

export function tokenize(input: string): string[] {
  const tokens: string[] = [];
  const normalized = input.toLowerCase();
  let cjkRun = "";
  let asciiRun = "";

  for (const char of normalized) {
    if (cjkCharPattern.test(char)) {
      flushAscii(tokens, asciiRun);
      asciiRun = "";
      cjkRun += char;
      continue;
    }

    if (isAsciiTokenChar(char)) {
      flushCjk(tokens, cjkRun);
      cjkRun = "";
      asciiRun += char;
      continue;
    }

    flushCjk(tokens, cjkRun);
    flushAscii(tokens, asciiRun);
    cjkRun = "";
    asciiRun = "";
  }

  flushCjk(tokens, cjkRun);
  flushAscii(tokens, asciiRun);

  return tokens;
}

function flushCjk(tokens: string[], value: string): void {
  if (!value) {
    return;
  }

  for (const char of value) {
    tokens.push(char);
  }

  for (let size = 2; size <= 3; size += 1) {
    for (let index = 0; index <= value.length - size; index += 1) {
      tokens.push(value.slice(index, index + size));
    }
  }
}

function flushAscii(tokens: string[], value: string): void {
  if (!value) {
    return;
  }

  for (const match of value.matchAll(asciiTokenPattern)) {
    const token = match[0];
    tokens.push(token);

    for (const part of token.split(/[^a-z0-9]+/)) {
      if (part && part !== token) {
        tokens.push(part);
      }
    }
  }
}

function isAsciiTokenChar(char: string): boolean {
  return /^[a-z0-9_./:-]$/.test(char);
}
