// Generated from github.com/bububa/kwai-marketing-api/api/tool/unit/bid_predict.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { BidPredictRequest, BidPredictRequestInit, BidPredict } from "../../../model/tool/unit";

export async function bidPredict(client: SDKClient, accessToken: string, req: BidPredictRequest | BidPredictRequestInit, signal?: AbortSignal): Promise<BidPredict> {
  const request = req instanceof BidPredictRequest ? req : new BidPredictRequest(req);
  return client.post<BidPredict>(accessToken, request, signal);
}

export { bidPredict as BidPredict };
