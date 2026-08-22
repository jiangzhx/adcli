// Ported from github.com/bububa/kwai-marketing-api/core/internal/debug/debug.go

export function printError(error: unknown, debug: boolean) {
  if (!debug) {
    return;
  }
  console.log("[DEBUG] [ERROR]", error);
}

export function printGetRequest(url: string, debug: boolean) {
  if (!debug) {
    return;
  }
  console.log("[DEBUG] [API] GET", url);
}

export function printPostJsonRequest(url: string, body: Uint8Array, debug: boolean) {
  if (!debug) {
    return;
  }
  const text = new TextDecoder().decode(body);
  let pretty = text;
  try {
    pretty = JSON.stringify(JSON.parse(text), null, 4);
  } catch {
    // keep raw body when it is not JSON
  }
  console.log(`[DEBUG] [API] JSON POST ${url}\nhttp request body:\n${pretty}\n`);
}

export function printPostMultipartRequest(url: string, fields: Record<string, string>, debug: boolean) {
  if (!debug) {
    return;
  }
  console.log(
    `[DEBUG] [API] multipart/form-data POST ${url}\nhttp request body:\n${JSON.stringify(fields, null, 4)}\n`,
  );
}

export function printHttpResponse(body: string, debug: boolean) {
  if (!debug) {
    return;
  }
  let pretty = body;
  try {
    pretty = JSON.stringify(JSON.parse(body), null, 4);
  } catch {
    // keep raw body when it is not JSON
  }
  console.log(`[DEBUG] [API] http response body:\n${pretty}\n`);
}
