// Generated from github.com/bububa/kwai-marketing-api/model/tool/unit/bid_trend_predict_detail.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface BidTrendPredictDetailRequestInit {
  advertiser_id?: KuaishouId;
}

export class BidTrendPredictDetailRequest implements PostRequest, BidTrendPredictDetailRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: BidTrendPredictDetailRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/v1/unit/bidTrendPredict/detail";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface BidTrendPredict {
  can_predict?: boolean;
  can_predict_conversion?: boolean;
  can_predict_delivery?: boolean;
  predict_impression?: number;
  predict_conversion?: number;
  predict_cost?: number;
  suggest_bid?: KuaishouId;
  suggest_bid_min?: number;
  suggest_bid_max?: number;
  tips_id?: KuaishouId;
  bid_delivery?: Record<string, number>;
  bid_conversion?: Record<string, number>;
}
