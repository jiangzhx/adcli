// Generated from oceanengine/ad_open_sdk_go models/model_tools_site_template_site_create_v2_request.go
// Do not edit manually.

import type { ToolsSiteTemplateSiteCreateV2RequestBricksInner } from "../models/index";

export interface ToolsSiteTemplateSiteCreateV2Request {
  advertiser_id: number | string;
  bricks: ToolsSiteTemplateSiteCreateV2RequestBricksInner[];
  name: string;
  site_id?: number | string;
  template_id: number | string;
}

