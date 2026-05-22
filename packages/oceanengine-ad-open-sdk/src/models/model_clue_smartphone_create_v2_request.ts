// Generated from oceanengine/ad_open_sdk_go models/model_clue_smartphone_create_v2_request.go
// Do not edit manually.

import type { ClueSmartphoneCreateV2CallDisplay, ClueSmartphoneCreateV2RequestNoDisturbTimesInner, ClueSmartphoneCreateV2ValidateType } from "../models/index";

export interface ClueSmartphoneCreateV2Request {
  advertiser_id: number | string;
  call_display?: ClueSmartphoneCreateV2CallDisplay;
  name: string;
  no_disturb_times?: ClueSmartphoneCreateV2RequestNoDisturbTimesInner[];
  phone_number: string;
  validate_type?: ClueSmartphoneCreateV2ValidateType;
}

