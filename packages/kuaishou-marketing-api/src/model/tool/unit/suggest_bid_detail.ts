// Generated from github.com/bububa/kwai-marketing-api/model/tool/unit/suggest_bid_detail.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface SuggestBidDetailRequestInit {
  advertiser_id?: KuaishouId;
  suggest_bid_param?: SuggestBidParam[];
}

export class SuggestBidDetailRequest implements PostRequest, SuggestBidDetailRequestInit {
  advertiser_id?: KuaishouId;
  suggest_bid_param?: SuggestBidParam[];

  constructor(init: SuggestBidDetailRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.suggest_bid_param = init.suggest_bid_param;
  }

  path() {
    return "gw/dsp/v1/unit/suggestBid/detail";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      suggest_bid_param: this.suggest_bid_param,
    });
  }
}

export interface SuggestBidParam {
  bid_type?: number;
  unit_id?: KuaishouId;
  campaign_id?: KuaishouId;
  predict_cpa_bid?: KuaishouId;
  current_cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  predict_deep_conv_bid?: KuaishouId;
  curr_deep_bid?: KuaishouId;
}

export interface SuggestBidUnit {
  can_suggest?: boolean;
  suggest_bid?: KuaishouId;
  suggest_bid_min?: number;
  suggest_bid_max?: number;
  unit_id?: KuaishouId;
  can_predict?: boolean;
  suggest_deep_bid?: KuaishouId;
  bid_percentile?: BidPercentile;
  deep_bid_percentile?: BidPercentile;
}

export interface BidPercentile {
  suggest_bid_percentile?: number;
  percentile?: Percentile[];
}

export interface Percentile {
  percentile_num?: number;
  bid?: KuaishouId;
}
