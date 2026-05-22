// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ElementRejectDetailInfoListStruct, ReviewResultStatus, SiteSetDefinition } from "../models";

export interface SiteSetResultListStruct {
  site_set?: SiteSetDefinition;
  system_status?: ReviewResultStatus;
  reject_message?: string;
  element_reject_detail_info?: ElementRejectDetailInfoListStruct[];
}

