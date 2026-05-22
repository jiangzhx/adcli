// Generated from oceanengine/ad_open_sdk_go models/model_clue_form_detail_v2_response_data_form_elements_inner.go
// Do not edit manually.

import type { ClueFormDetailV2DataFormElementsAllowEmpty, ClueFormDetailV2DataFormElementsElementType, ClueFormDetailV2DataFormElementsIsUnique } from "../models/index";

export interface ClueFormDetailV2ResponseDataFormElementsInner {
  allow_empty?: ClueFormDetailV2DataFormElementsAllowEmpty;
  default_value?: number;
  element_id?: number | string;
  element_type?: ClueFormDetailV2DataFormElementsElementType;
  is_unique?: ClueFormDetailV2DataFormElementsIsUnique;
  label?: string;
  layer?: number;
  sequence?: number;
}

