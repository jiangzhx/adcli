// Generated from oceanengine/ad_open_sdk_go models/model_tools_promotion_diagnosis_suggestion_accept_v3_0_request.go
// Do not edit manually.

import type { ToolsPromotionDiagnosisSuggestionAcceptV30RequestToolsInner } from "../models/index";

export interface ToolsPromotionDiagnosisSuggestionAcceptV30Request {
  advertiser_id?: number | string;
  diagnosis_id?: string;
  promotion_id?: number | string;
  tools?: ToolsPromotionDiagnosisSuggestionAcceptV30RequestToolsInner[];
}

