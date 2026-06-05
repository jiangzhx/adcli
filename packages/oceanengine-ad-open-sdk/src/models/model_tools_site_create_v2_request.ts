// 由 oceanengine/ad_open_sdk_go models/model_tools_site_create_v2_request.go 生成
// 不要手动编辑。

import type { ToolsSiteCreateV2RequestBricksInner, ToolsSiteCreateV2SiteType } from "../models/index";

export interface ToolsSiteCreateV2Request {
  advertiser_id: number | string;
  bricks: ToolsSiteCreateV2RequestBricksInner[];
  name: string;
  site_type?: ToolsSiteCreateV2SiteType;
}

