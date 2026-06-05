// 由 oceanengine/ad_open_sdk_go models/model_local_market_page_get_v3_0_response_data_mark_page_info_inner.go 生成
// 不要手动编辑。

import type { LocalMarketPageGetV30DataMarkPageInfoStatus, LocalMarketPageGetV30ResponseDataMarkPageInfoInnerToolPackInfo } from "../models/index";

export interface LocalMarketPageGetV30ResponseDataMarkPageInfoInner {
  cover_image_url?: string;
  market_page_id?: number | string;
  market_page_name?: string;
  status?: LocalMarketPageGetV30DataMarkPageInfoStatus;
  tool_pack_info?: LocalMarketPageGetV30ResponseDataMarkPageInfoInnerToolPackInfo;
}

