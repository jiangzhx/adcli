// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponDetailV2DataFormEnableLayer, ClueCouponDetailV2DataFormFormType, ClueCouponDetailV2DataFormValidateType, ClueCouponDetailV2ResponseDataFormElementsInner, ClueCouponDetailV2ResponseDataFormExtendInfo } from "../models";

export interface ClueCouponDetailV2ResponseDataForm {
  elements?: ClueCouponDetailV2ResponseDataFormElementsInner[];
  enable_layer?: ClueCouponDetailV2DataFormEnableLayer;
  extend_info?: ClueCouponDetailV2ResponseDataFormExtendInfo;
  form_type?: ClueCouponDetailV2DataFormFormType;
  instance_id?: number;
  layer_submit_text?: string;
  name?: string;
  submit_text?: string;
  validate_type?: ClueCouponDetailV2DataFormValidateType;
}

