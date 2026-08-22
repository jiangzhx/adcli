// Generated from github.com/bububa/kwai-marketing-api/api/dsp/native/open_account_native.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { OpenAccountNativeRequest, OpenAccountNativeRequestInit } from "../../../model/dsp/native";

export async function openAccountNative(client: SDKClient, accessToken: string, req: OpenAccountNativeRequest | OpenAccountNativeRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof OpenAccountNativeRequest ? req : new OpenAccountNativeRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { openAccountNative as OpenAccountNative };
