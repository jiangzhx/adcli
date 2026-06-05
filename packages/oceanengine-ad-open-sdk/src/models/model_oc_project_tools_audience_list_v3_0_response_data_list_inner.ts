// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_list_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceListV30DataListAgeAudience, OcProjectToolsAudienceListV30DataListAudienceType, OcProjectToolsAudienceListV30DataListFirstStatus, OcProjectToolsAudienceListV30DataListGenderAudience, OcProjectToolsAudienceListV30DataListSecondStatus, OcProjectToolsAudienceListV30ResponseDataListInnerDeliverySetting, OcProjectToolsAudienceListV30ResponseDataListInnerDistrictAudience } from "../models/index";

export interface OcProjectToolsAudienceListV30ResponseDataListInner {
  age_audience?: OcProjectToolsAudienceListV30DataListAgeAudience[];
  audience_type?: OcProjectToolsAudienceListV30DataListAudienceType;
  create_time?: string;
  delivery_setting?: OcProjectToolsAudienceListV30ResponseDataListInnerDeliverySetting;
  district_audience?: OcProjectToolsAudienceListV30ResponseDataListInnerDistrictAudience;
  first_status?: OcProjectToolsAudienceListV30DataListFirstStatus;
  gender_audience?: OcProjectToolsAudienceListV30DataListGenderAudience;
  name?: string;
  project_id?: number | string;
  schedule_id?: number | string;
  second_status?: OcProjectToolsAudienceListV30DataListSecondStatus[];
  update_time?: string;
}

