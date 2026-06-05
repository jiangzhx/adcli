// 由 oceanengine/ad_open_sdk_go models/model_brand_creative_get_v3_0_response_data_creatives_inner.go 生成
// 不要手动编辑。

import type { BrandCreativeGetV30DataCreativesCreativeStatus, BrandCreativeGetV30ResponseDataCreativesInnerCategoryInfo, BrandCreativeGetV30ResponseDataCreativesInnerCreative, BrandCreativeGetV30ResponseDataCreativesInnerTrackUrlInfo } from "../models/index";

export interface BrandCreativeGetV30ResponseDataCreativesInner {
  ad_id?: string;
  advertiser_id?: string;
  anchor_id?: string;
  anchor_name?: string;
  category_info?: BrandCreativeGetV30ResponseDataCreativesInnerCategoryInfo;
  create_time?: string;
  creative?: BrandCreativeGetV30ResponseDataCreativesInnerCreative;
  creative_status?: BrandCreativeGetV30DataCreativesCreativeStatus;
  end_time?: string;
  modify_time?: string;
  start_time?: string;
  track_url_info?: BrandCreativeGetV30ResponseDataCreativesInnerTrackUrlInfo;
}

