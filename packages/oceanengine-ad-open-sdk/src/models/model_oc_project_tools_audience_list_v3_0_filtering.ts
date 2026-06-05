// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_audience_list_v3_0_filtering.go 生成
// 不要手动编辑。

import type { OcProjectToolsAudienceListV30FilteringFirstStatus, OcProjectToolsAudienceListV30FilteringSecondStatus } from "../models/index";

export interface OcProjectToolsAudienceListV30Filtering {
  first_status?: OcProjectToolsAudienceListV30FilteringFirstStatus;
  name?: string;
  project_id?: (number | string)[];
  schedule_id?: (number | string)[];
  second_status?: OcProjectToolsAudienceListV30FilteringSecondStatus;
}

