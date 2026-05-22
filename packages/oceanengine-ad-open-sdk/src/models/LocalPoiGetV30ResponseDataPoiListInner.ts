// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPoiGetV30ResponseDataPoiListInnerBindMarketPageInfosInner } from "../models";

export interface LocalPoiGetV30ResponseDataPoiListInner {
  bind_market_page_infos?: LocalPoiGetV30ResponseDataPoiListInnerBindMarketPageInfosInner[];
  city?: string;
  district?: string;
  exists_product?: boolean;
  poi_address?: string;
  poi_id?: number;
  poi_name?: string;
  province?: string;
}

