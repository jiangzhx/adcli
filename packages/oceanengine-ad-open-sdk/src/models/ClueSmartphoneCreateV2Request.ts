// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueSmartphoneCreateV2CallDisplay, ClueSmartphoneCreateV2RequestNoDisturbTimesInner, ClueSmartphoneCreateV2ValidateType } from "../models";

export interface ClueSmartphoneCreateV2Request {
  advertiser_id: number;
  call_display?: ClueSmartphoneCreateV2CallDisplay;
  name: string;
  no_disturb_times?: ClueSmartphoneCreateV2RequestNoDisturbTimesInner[];
  phone_number: string;
  validate_type?: ClueSmartphoneCreateV2ValidateType;
}

