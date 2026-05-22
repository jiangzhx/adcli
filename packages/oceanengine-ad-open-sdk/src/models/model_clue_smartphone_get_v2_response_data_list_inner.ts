// Generated from oceanengine/ad_open_sdk_go models/model_clue_smartphone_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { ClueSmartphoneGetV2DataListValidateType, ClueSmartphoneGetV2ResponseDataListInnerNoDisturbTimesInner } from "../models/index";

export interface ClueSmartphoneGetV2ResponseDataListInner {
  call_display?: number;
  create_time?: string;
  instance_id?: number | string;
  name?: string;
  no_disturb_times?: ClueSmartphoneGetV2ResponseDataListInnerNoDisturbTimesInner[];
  phone_number?: string;
  validate_type?: ClueSmartphoneGetV2DataListValidateType;
}

