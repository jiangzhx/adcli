// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueFormListV2DataListEnableLayer, ClueFormListV2DataListFormType, ClueFormListV2DataListIsDel, ClueFormListV2DataListValidateType } from "../models";

export interface ClueFormListV2ResponseDataListInner {
  create_time?: string;
  enable_layer?: ClueFormListV2DataListEnableLayer;
  form_type?: ClueFormListV2DataListFormType;
  instance_id?: number | string;
  is_del?: ClueFormListV2DataListIsDel;
  name?: string;
  update_time?: string;
  validate_type?: ClueFormListV2DataListValidateType;
}

