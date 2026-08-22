// Generated from github.com/bububa/kwai-marketing-api/api/tool/key_frame.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { KeyFrameRequest, KeyFrameRequestInit } from "../../model/tool";

export async function keyFrame(client: SDKClient, accessToken: string, req: KeyFrameRequest | KeyFrameRequestInit, signal?: AbortSignal): Promise<string[]> {
  const request = req instanceof KeyFrameRequest ? req : new KeyFrameRequest(req);
  return client.get<string[]>(accessToken, request, signal);
}

export { keyFrame as KeyFrame };
