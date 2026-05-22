// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueFormDetailV2DataFormEnableLayer, ClueFormDetailV2DataFormFormType, ClueFormDetailV2DataFormIsDel, ClueFormDetailV2DataFormValidateType, ClueFormDetailV2ResponseDataFormElementsInner, ClueFormDetailV2ResponseDataFormExtendInfo } from "../models";

export interface ClueFormDetailV2ResponseDataForm {
  create_time?: string;
  elements?: ClueFormDetailV2ResponseDataFormElementsInner[];
  enable_layer?: ClueFormDetailV2DataFormEnableLayer;
  extend_info?: ClueFormDetailV2ResponseDataFormExtendInfo;
  form_type?: ClueFormDetailV2DataFormFormType;
  instance_id?: number;
  is_del?: ClueFormDetailV2DataFormIsDel;
  layer_submit_text?: string;
  name?: string;
  submit_text?: string;
  update_time?: string;
  validate_type?: ClueFormDetailV2DataFormValidateType;
}

