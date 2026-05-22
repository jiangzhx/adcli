// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueFormCreateV2EnableLayer, ClueFormCreateV2RequestElementsInner, ClueFormCreateV2RequestExtendInfo, ClueFormCreateV2ValidateType } from "../models";

export interface ClueFormCreateV2Request {
  advertiser_id: number;
  elements: ClueFormCreateV2RequestElementsInner[];
  enable_layer?: ClueFormCreateV2EnableLayer;
  extend_info?: ClueFormCreateV2RequestExtendInfo;
  layer_submit_text?: string;
  name: string;
  submit_text: string;
  validate_type: ClueFormCreateV2ValidateType;
}

