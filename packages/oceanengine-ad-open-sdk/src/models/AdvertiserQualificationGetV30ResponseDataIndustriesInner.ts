// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserQualificationGetV30ResponseDataIndustriesInnerOthersInner, AdvertiserQualificationGetV30ResponseDataIndustriesInnerPromotion } from "../models";

export interface AdvertiserQualificationGetV30ResponseDataIndustriesInner {
  industry1_id?: number | string;
  industry1_name?: string;
  industry2_id?: number | string;
  industry2_name?: string;
  industry3_id?: number | string;
  industry3_name?: string;
  is_history?: boolean;
  others?: AdvertiserQualificationGetV30ResponseDataIndustriesInnerOthersInner[];
  promotion?: AdvertiserQualificationGetV30ResponseDataIndustriesInnerPromotion;
}

