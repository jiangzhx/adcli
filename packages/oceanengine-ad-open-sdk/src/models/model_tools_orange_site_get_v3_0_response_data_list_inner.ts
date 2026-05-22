// Generated from oceanengine/ad_open_sdk_go models/model_tools_orange_site_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ToolsOrangeSiteGetV30DataListConsultSiteType, ToolsOrangeSiteGetV30DataListFunctionType, ToolsOrangeSiteGetV30DataListSiteType, ToolsOrangeSiteGetV30DataListStatus } from "../models/index";

export interface ToolsOrangeSiteGetV30ResponseDataListInner {
  consult_site_type?: ToolsOrangeSiteGetV30DataListConsultSiteType[];
  function_type?: ToolsOrangeSiteGetV30DataListFunctionType;
  name?: string;
  site_id?: string;
  site_type?: ToolsOrangeSiteGetV30DataListSiteType;
  status?: ToolsOrangeSiteGetV30DataListStatus;
  thumbnail?: string;
  url?: string;
}

