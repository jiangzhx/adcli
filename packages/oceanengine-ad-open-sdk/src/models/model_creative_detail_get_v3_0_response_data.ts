// Generated from oceanengine/ad_open_sdk_go models/model_creative_detail_get_v3_0_response_data.go
// Do not edit manually.

import type { CreativeDetailGetV30ResponseDataAdData, CreativeDetailGetV30ResponseDataCreative, CreativeDetailGetV30ResponseDataCreativeListInner } from "../models/index";

export interface CreativeDetailGetV30ResponseData {
  ad_data?: CreativeDetailGetV30ResponseDataAdData;
  ad_id?: number | string;
  advertiser_id?: number | string;
  creative?: CreativeDetailGetV30ResponseDataCreative;
  creative_list?: CreativeDetailGetV30ResponseDataCreativeListInner[];
}

