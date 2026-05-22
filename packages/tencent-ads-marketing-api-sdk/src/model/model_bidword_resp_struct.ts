// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_resp_struct.go
// Do not edit manually.

import type { BidwordMatchType, BidwordPauseType } from "../model/index";

export interface BidwordRespStruct {
  index?: number;
  bidword_id?: number | string;
  bidword?: string;
  bid_price?: number;
  match_type?: BidwordMatchType;
  configured_status?: BidwordPauseType;
  error_msg?: string;
  approval_status?: number;
  dynamic_creative_id?: number | string;
}

