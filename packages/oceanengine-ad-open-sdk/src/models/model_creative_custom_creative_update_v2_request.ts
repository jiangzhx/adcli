// Generated from oceanengine/ad_open_sdk_go models/model_creative_custom_creative_update_v2_request.go
// Do not edit manually.

import type { CreativeCustomCreativeUpdateV2RequestAdData, CreativeCustomCreativeUpdateV2RequestCreativeListInner } from "../models/index";

export interface CreativeCustomCreativeUpdateV2Request {
  ad_data: CreativeCustomCreativeUpdateV2RequestAdData;
  ad_id: number | string;
  advertiser_id: number | string;
  creative_list: CreativeCustomCreativeUpdateV2RequestCreativeListInner[];
}

