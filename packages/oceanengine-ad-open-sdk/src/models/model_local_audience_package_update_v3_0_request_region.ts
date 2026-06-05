// 由 oceanengine/ad_open_sdk_go models/model_local_audience_package_update_v3_0_request_region.go 生成
// 不要手动编辑。

import type { LocalAudiencePackageUpdateV30RegionCityDivide, LocalAudiencePackageUpdateV30RegionLocationType } from "../models/index";

export interface LocalAudiencePackageUpdateV30RequestRegion {
  city?: number[];
  city_divide?: LocalAudiencePackageUpdateV30RegionCityDivide;
  location_type?: LocalAudiencePackageUpdateV30RegionLocationType;
  region_ver?: string;
}

