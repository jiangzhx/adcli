// Generated from github.com/bububa/kwai-marketing-api/api/tool/unit/bid_trend_predict_detail.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { BidTrendPredictDetailRequest, BidTrendPredictDetailRequestInit, BidTrendPredict } from "../../../model/tool/unit";

export async function bidTrendPredictDetail(client: SDKClient, accessToken: string, req: BidTrendPredictDetailRequest | BidTrendPredictDetailRequestInit, signal?: AbortSignal): Promise<BidTrendPredict> {
  const request = req instanceof BidTrendPredictDetailRequest ? req : new BidTrendPredictDetailRequest(req);
  return client.post<BidTrendPredict>(accessToken, request, signal);
}

export { bidTrendPredictDetail as BidTrendPredictDetail };
