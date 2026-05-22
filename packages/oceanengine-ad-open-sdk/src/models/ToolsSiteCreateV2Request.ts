// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsSiteCreateV2RequestBricksInner, ToolsSiteCreateV2SiteType } from "../models";

export interface ToolsSiteCreateV2Request {
  advertiser_id: number | string;
  bricks: ToolsSiteCreateV2RequestBricksInner[];
  name: string;
  site_type?: ToolsSiteCreateV2SiteType;
}

