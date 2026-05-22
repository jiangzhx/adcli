// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_site_set_result_list_struct.go
// Do not edit manually.

import type { ElementRejectDetailInfoListStruct, ReviewResultStatus, SiteSetDefinition } from "../v3/index";

export interface SiteSetResultListStruct {
  site_set?: SiteSetDefinition;
  system_status?: ReviewResultStatus;
  reject_message?: string;
  element_reject_detail_info?: ElementRejectDetailInfoListStruct[];
}

