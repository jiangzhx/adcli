// 由 oceanengine/ad_open_sdk_go models/model_clue_coupon_detail_v2_response_data_form_elements_inner.go 生成
// 不要手动编辑。

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

