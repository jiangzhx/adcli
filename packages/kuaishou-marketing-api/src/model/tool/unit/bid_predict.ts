// Generated from github.com/bububa/kwai-marketing-api/model/tool/unit/bid_predict.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface BidPredictRequestInit {
  advertiser_id?: KuaishouId;
}

export class BidPredictRequest implements PostRequest, BidPredictRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: BidPredictRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/v1/unit/bidPredict";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}

export interface BidPredict {
  can_predict?: boolean;
  can_predict_conversion?: boolean;
  can_predict_delivery?: boolean;
  predict_impression?: number;
  predict_conversion?: number;
  suggest_bid?: KuaishouId;
  suggest_bid_min?: number;
  suggest_bid_max?: number;
  tips_id?: KuaishouId;
}
