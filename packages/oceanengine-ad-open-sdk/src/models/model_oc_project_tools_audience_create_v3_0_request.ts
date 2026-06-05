// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_create_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceCreateV30AgeAudience, OcProjectToolsAudienceCreateV30AudienceType, OcProjectToolsAudienceCreateV30GenderAudience, OcProjectToolsAudienceCreateV30RequestDeliverySetting, OcProjectToolsAudienceCreateV30RequestDistrictAudience } from "../models/index";

export interface OcProjectToolsAudienceCreateV30Request {
  advertiser_id: number | string;
  age_audience?: OcProjectToolsAudienceCreateV30AgeAudience[];
  audience_type: OcProjectToolsAudienceCreateV30AudienceType[];
  delivery_setting: OcProjectToolsAudienceCreateV30RequestDeliverySetting;
  district_audience?: OcProjectToolsAudienceCreateV30RequestDistrictAudience;
  gender_audience?: OcProjectToolsAudienceCreateV30GenderAudience;
  name?: string;
  project_id: number | string;
}

