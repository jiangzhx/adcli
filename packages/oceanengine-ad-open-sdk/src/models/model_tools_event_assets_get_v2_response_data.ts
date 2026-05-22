// Generated from oceanengine/ad_open_sdk_go models/model_tools_event_assets_get_v2_response_data.go
// Do not edit manually.

import type { ToolsEventAssetsGetV2ResponseDataAppInner, ToolsEventAssetsGetV2ResponseDataLandingPagesInner, ToolsEventAssetsGetV2ResponseDataMiniProgramInner, ToolsEventAssetsGetV2ResponseDataPageInfo, ToolsEventAssetsGetV2ResponseDataQuickAppInner } from "../models/index";

export interface ToolsEventAssetsGetV2ResponseData {
  app?: ToolsEventAssetsGetV2ResponseDataAppInner[];
  landing_pages?: ToolsEventAssetsGetV2ResponseDataLandingPagesInner[];
  mini_program?: ToolsEventAssetsGetV2ResponseDataMiniProgramInner[];
  page_info?: ToolsEventAssetsGetV2ResponseDataPageInfo;
  quick_app?: ToolsEventAssetsGetV2ResponseDataQuickAppInner[];
}

