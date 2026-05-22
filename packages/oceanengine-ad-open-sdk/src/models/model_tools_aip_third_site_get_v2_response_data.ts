// Generated from oceanengine/ad_open_sdk_go models/model_tools_aip_third_site_get_v2_response_data.go
// Do not edit manually.

import type { ToolsAipThirdSiteGetV2DataAuditStatus, ToolsAipThirdSiteGetV2DataValidateStatus } from "../models/index";

export interface ToolsAipThirdSiteGetV2ResponseData {
  adveriser_id?: number | string;
  audit_message?: string;
  audit_status?: ToolsAipThirdSiteGetV2DataAuditStatus;
  create_time?: string;
  name?: string;
  site_id?: number | string;
  update_time?: string;
  url?: string;
  validate_message?: string;
  validate_status?: ToolsAipThirdSiteGetV2DataValidateStatus;
}

