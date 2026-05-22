// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsSiteTemplateSiteCreateV2RequestBricksInner } from "../models";

export interface ToolsSiteTemplateSiteCreateV2Request {
  advertiser_id: number | string;
  bricks: ToolsSiteTemplateSiteCreateV2RequestBricksInner[];
  name: string;
  site_id?: number | string;
  template_id: number | string;
}

