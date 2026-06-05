// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_update_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceUpdateV30AgeAudience, OcProjectToolsAudienceUpdateV30AudienceType, OcProjectToolsAudienceUpdateV30GenderAudience, OcProjectToolsAudienceUpdateV30RequestDeliverySetting, OcProjectToolsAudienceUpdateV30RequestDistrictAudience } from "../models/index";

export interface OcProjectToolsAudienceUpdateV30Request {
  advertiser_id: number | string;
  age_audience?: OcProjectToolsAudienceUpdateV30AgeAudience[];
  audience_type?: OcProjectToolsAudienceUpdateV30AudienceType[];
  delivery_setting?: OcProjectToolsAudienceUpdateV30RequestDeliverySetting;
  district_audience?: OcProjectToolsAudienceUpdateV30RequestDistrictAudience;
  gender_audience?: OcProjectToolsAudienceUpdateV30GenderAudience;
  name?: string;
  schedule_id: number | string;
}

