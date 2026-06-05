// 由 oceanengine/ad_open_sdk_go models/model_local_project_detail_v3_0_response_data_audience_region.go 生成
// 不要手动编辑。

import type { LocalProjectDetailV30DataAudienceRegionCityDivide, LocalProjectDetailV30DataAudienceRegionLocationType } from "../models/index";

export interface LocalProjectDetailV30ResponseDataAudienceRegion {
  city?: number[];
  city_divide?: LocalProjectDetailV30DataAudienceRegionCityDivide;
  location_type?: LocalProjectDetailV30DataAudienceRegionLocationType;
  region_ver?: string;
}

