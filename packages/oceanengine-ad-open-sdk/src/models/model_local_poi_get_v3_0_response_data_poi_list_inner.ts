// Generated from oceanengine/ad_open_sdk_go models/model_local_poi_get_v3_0_response_data_poi_list_inner.go
// Do not edit manually.

import type { LocalPoiGetV30ResponseDataPoiListInnerBindMarketPageInfosInner } from "../models/index";

export interface LocalPoiGetV30ResponseDataPoiListInner {
  bind_market_page_infos?: LocalPoiGetV30ResponseDataPoiListInnerBindMarketPageInfosInner[];
  city?: string;
  district?: string;
  exists_product?: boolean;
  poi_address?: string;
  poi_id?: number | string;
  poi_name?: string;
  province?: string;
}

