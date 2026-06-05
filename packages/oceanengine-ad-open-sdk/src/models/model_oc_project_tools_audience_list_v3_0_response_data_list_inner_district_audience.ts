// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_list_v3_0_response_data_list_inner_district_audience.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceListV30DataListDistrictAudienceDistrict, OcProjectToolsAudienceListV30ResponseDataListInnerDistrictAudienceGeolocationInner } from "../models/index";

export interface OcProjectToolsAudienceListV30ResponseDataListInnerDistrictAudience {
  city?: number[];
  district?: OcProjectToolsAudienceListV30DataListDistrictAudienceDistrict;
  geolocation?: OcProjectToolsAudienceListV30ResponseDataListInnerDistrictAudienceGeolocationInner[];
  region_version?: string;
}

