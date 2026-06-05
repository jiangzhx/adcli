// 由 oceanengine/ad_open_sdk_go models/model_clue_form_list_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ClueFormListV2DataListEnableLayer, ClueFormListV2DataListFormType, ClueFormListV2DataListIsDel, ClueFormListV2DataListValidateType } from "../models/index";

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

