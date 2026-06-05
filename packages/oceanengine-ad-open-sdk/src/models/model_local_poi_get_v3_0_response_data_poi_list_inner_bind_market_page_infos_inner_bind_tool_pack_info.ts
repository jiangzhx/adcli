// 由 oceanengine/ad_open_sdk_go models/model_local_poi_get_v3_0_response_data_poi_list_inner_bind_market_page_infos_inner_bind_tool_pack_info.go 生成
// 不要手动编辑。

import type { LocalPoiGetV30DataPoiListBindMarketPageInfosBindToolPackInfoToolPackTypes } from "../models/index";

export interface LocalPoiGetV30ResponseDataPoiListInnerBindMarketPageInfosInnerBindToolPackInfo {
  enable?: boolean;
  enable_intelligent_selection?: boolean;
  tool_pack_id?: number | string;
  tool_pack_name?: string;
  tool_pack_types?: LocalPoiGetV30DataPoiListBindMarketPageInfosBindToolPackInfoToolPackTypes[];
}

