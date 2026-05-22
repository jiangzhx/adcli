// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaBrandFuzzyGetV30DataBrandDetailListBrandType, DpaBrandFuzzyGetV30ResponseDataBrandDetailListInnerBrandTrademarkListInner } from "../models";

export interface DpaBrandFuzzyGetV30ResponseDataBrandDetailListInner {
  brand_full_name?: string;
  brand_id?: number;
  brand_name_cn?: string;
  brand_name_en?: string;
  brand_trademark_list?: DpaBrandFuzzyGetV30ResponseDataBrandDetailListInnerBrandTrademarkListInner[];
  brand_type?: DpaBrandFuzzyGetV30DataBrandDetailListBrandType;
}

