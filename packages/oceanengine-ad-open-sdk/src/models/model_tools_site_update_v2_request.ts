// Generated from oceanengine/ad_open_sdk_go models/model_tools_site_update_v2_request.go
// Do not edit manually.

import type { ToolsSiteUpdateV2RequestBricksInner } from "../models/index";

export interface ToolsSiteUpdateV2Request {
  advertiser_id: number | string;
  bricks: ToolsSiteUpdateV2RequestBricksInner[];
  name?: string;
  site_id: string;
}

