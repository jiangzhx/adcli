// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/creative_video_generate.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { CreativeVideoGenerateRequest, CreativeVideoGenerateRequestInit, GenerateVideoResult } from "../../../model/dsp/dpa";

export async function creativeVideoGenerate(client: SDKClient, accessToken: string, req: CreativeVideoGenerateRequest | CreativeVideoGenerateRequestInit, signal?: AbortSignal): Promise<GenerateVideoResult[]> {
  const request = req instanceof CreativeVideoGenerateRequest ? req : new CreativeVideoGenerateRequest(req);
  const resp = await client.post<{ video_infos?: GenerateVideoResult[] }>(accessToken, request, signal);
  return resp.video_infos ?? [];
}

export { creativeVideoGenerate as CreativeVideoGenerate };
