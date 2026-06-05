// 由 oceanengine/ad_open_sdk_go models/model_creative_custom_creative_create_v2_request.go 生成
// 不要手动编辑。

import type { CreativeCustomCreativeCreateV2RequestAdData, CreativeCustomCreativeCreateV2RequestCreativeListInner } from "../models/index";

export interface CreativeCustomCreativeCreateV2Request {
  ad_data: CreativeCustomCreativeCreateV2RequestAdData;
  ad_id: number | string;
  advertiser_id: number | string;
  creative_list: CreativeCustomCreativeCreateV2RequestCreativeListInner[];
}

