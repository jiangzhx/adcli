// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_create_v3_0_request_district_audience.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceCreateV30DistrictAudienceDistrict, OcProjectToolsAudienceCreateV30RequestDistrictAudienceGeolocationInner } from "../models/index";

export interface OcProjectToolsAudienceCreateV30RequestDistrictAudience {
  city?: number[];
  district?: OcProjectToolsAudienceCreateV30DistrictAudienceDistrict;
  geolocation?: OcProjectToolsAudienceCreateV30RequestDistrictAudienceGeolocationInner[];
  region_version?: string;
}

