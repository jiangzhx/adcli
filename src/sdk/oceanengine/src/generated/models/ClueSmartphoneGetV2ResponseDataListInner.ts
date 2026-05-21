// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ClueSmartphoneGetV2DataListValidateType, ClueSmartphoneGetV2ResponseDataListInnerNoDisturbTimesInner } from "../models";

export interface ClueSmartphoneGetV2ResponseDataListInner {
  call_display?: number;
  create_time?: string;
  instance_id?: number;
  name?: string;
  no_disturb_times?: ClueSmartphoneGetV2ResponseDataListInnerNoDisturbTimesInner[];
  phone_number?: string;
  validate_type?: ClueSmartphoneGetV2DataListValidateType;
}

