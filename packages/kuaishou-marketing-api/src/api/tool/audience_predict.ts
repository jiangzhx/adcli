// Generated from github.com/bububa/kwai-marketing-api/api/tool/audience_predict.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { AudiencePredictRequest, AudiencePredictRequestInit } from "../../model/tool";

export async function audiencePredict(client: SDKClient, accessToken: string, req: AudiencePredictRequest | AudiencePredictRequestInit, signal?: AbortSignal): Promise<number> {
  const request = req instanceof AudiencePredictRequest ? req : new AudiencePredictRequest(req);
  const resp = await client.post<{ audience_prediction_num?: number }>(accessToken, request, signal);
  return resp.audience_prediction_num ?? 0;
}

export { audiencePredict as AudiencePredict };
