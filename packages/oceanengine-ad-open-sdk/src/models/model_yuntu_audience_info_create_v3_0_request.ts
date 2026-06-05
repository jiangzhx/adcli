// 由 oceanengine/ad_open_sdk_go models/model_yuntu_audience_info_create_v3_0_request.go 生成
// 不要手动编辑。

import type { YuntuAudienceInfoCreateV30RequestCalculatePoolsInner } from "../models/index";

export interface YuntuAudienceInfoCreateV30Request {
  advertiser_id: number | string;
  calculate_pools: YuntuAudienceInfoCreateV30RequestCalculatePoolsInner[];
  expire_date: string;
  name: string;
  service_provider_id: number | string;
  yuntu_brand_id: number | string;
}

