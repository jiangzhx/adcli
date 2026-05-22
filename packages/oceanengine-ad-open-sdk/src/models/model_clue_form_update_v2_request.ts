// Generated from oceanengine/ad_open_sdk_go models/model_clue_form_update_v2_request.go
// Do not edit manually.

import type { ClueFormUpdateV2RequestExtendInfo } from "../models/index";

export interface ClueFormUpdateV2Request {
  advertiser_id: number | string;
  extend_info?: ClueFormUpdateV2RequestExtendInfo;
  instance_id: number | string;
  layer_submit_text?: string;
  name?: string;
  submit_text?: string;
}

