// 由 oceanengine/ad_open_sdk_go models/model_local_market_page_list_get_v3_0_response_data_mark_page_id_list_inner.go 生成
// 不要手动编辑。

import type { LocalMarketPageListGetV30DataMarkPageIdListStatus, LocalMarketPageListGetV30ResponseDataMarkPageIdListInnerToolPackInfo } from "../models/index";

export interface LocalMarketPageListGetV30ResponseDataMarkPageIdListInner {
  cover_image_url?: string;
  market_page_id?: number | string;
  market_page_name?: string;
  status?: LocalMarketPageListGetV30DataMarkPageIdListStatus;
  tool_pack_info?: LocalMarketPageListGetV30ResponseDataMarkPageIdListInnerToolPackInfo;
}

