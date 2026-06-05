// 由 oceanengine/ad_open_sdk_go models/model_agent_advertiser_select_v2_response_data.go 生成
// 不要手动编辑。

import type { AgentAdvertiserSelectV2ResponseDataCursorPageInfo, AgentAdvertiserSelectV2ResponseDataPageInfo } from "../models/index";

export interface AgentAdvertiserSelectV2ResponseData {
  account_source?: string;
  advertiser_ids?: (number | string)[];
  cursor_page_info?: AgentAdvertiserSelectV2ResponseDataCursorPageInfo;
  list?: number[];
  page_info?: AgentAdvertiserSelectV2ResponseDataPageInfo;
}

