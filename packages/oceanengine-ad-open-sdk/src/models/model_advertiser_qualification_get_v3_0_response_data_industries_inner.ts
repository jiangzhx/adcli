// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_qualification_get_v3_0_response_data_industries_inner.go
// Do not edit manually.

import type { AdvertiserQualificationGetV30ResponseDataIndustriesInnerOthersInner, AdvertiserQualificationGetV30ResponseDataIndustriesInnerPromotion } from "../models/index";

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

