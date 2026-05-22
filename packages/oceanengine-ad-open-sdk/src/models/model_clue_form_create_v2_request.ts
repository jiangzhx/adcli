// Generated from oceanengine/ad_open_sdk_go models/model_clue_form_create_v2_request.go
// Do not edit manually.

import type { ClueFormCreateV2EnableLayer, ClueFormCreateV2RequestElementsInner, ClueFormCreateV2RequestExtendInfo, ClueFormCreateV2ValidateType } from "../models/index";

export interface ClueFormCreateV2Request {
  advertiser_id: number | string;
  elements: ClueFormCreateV2RequestElementsInner[];
  enable_layer?: ClueFormCreateV2EnableLayer;
  extend_info?: ClueFormCreateV2RequestExtendInfo;
  layer_submit_text?: string;
  name: string;
  submit_text: string;
  validate_type: ClueFormCreateV2ValidateType;
}

