// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_update_v3_0_request_district_audience.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceUpdateV30DistrictAudienceDistrict, OcProjectToolsAudienceUpdateV30RequestDistrictAudienceGeolocationInner } from "../models/index";

export interface OcProjectToolsAudienceUpdateV30RequestDistrictAudience {
  city?: number[];
  district?: OcProjectToolsAudienceUpdateV30DistrictAudienceDistrict;
  geolocation?: OcProjectToolsAudienceUpdateV30RequestDistrictAudienceGeolocationInner[];
  region_version?: string;
}

