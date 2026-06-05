// 由 oceanengine/ad_open_sdk_go models/model_brand_region_get_v3_0_response_data_regions_inner.go 生成
// 不要手动编辑。

import type { BrandRegionGetV30ResponseDataRegionsInnerSubRegionsInner } from "../models/index";

export interface BrandRegionGetV30ResponseDataRegionsInner {
  full_name?: string;
  id?: number | string;
  name?: string;
  sub_regions?: BrandRegionGetV30ResponseDataRegionsInnerSubRegionsInner[];
}

