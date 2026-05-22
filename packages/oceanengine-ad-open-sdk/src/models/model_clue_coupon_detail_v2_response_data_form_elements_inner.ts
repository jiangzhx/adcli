// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_detail_v2_response_data_form_elements_inner.go
// Do not edit manually.

import type { ClueCouponDetailV2DataFormElementsAllowEmpty, ClueCouponDetailV2DataFormElementsElementType, ClueCouponDetailV2DataFormElementsIsUnique } from "../models/index";

export interface ClueCouponDetailV2ResponseDataFormElementsInner {
  allow_empty?: ClueCouponDetailV2DataFormElementsAllowEmpty;
  default_value?: number;
  element_id?: number | string;
  element_type?: ClueCouponDetailV2DataFormElementsElementType;
  is_unique?: ClueCouponDetailV2DataFormElementsIsUnique;
  label?: string;
  layer?: number;
  sequence?: number;
}

