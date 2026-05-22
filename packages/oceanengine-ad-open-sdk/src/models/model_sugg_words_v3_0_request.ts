// Generated from oceanengine/ad_open_sdk_go models/model_sugg_words_v3_0_request.go
// Do not edit manually.

import type { SuggWordsV30RequestPromotionMaterials } from "../models/index";

export interface SuggWordsV30Request {
  advertiser_id: number | string;
  project_id?: number | string;
  promotion_materials?: SuggWordsV30RequestPromotionMaterials;
  query_list?: string[];
}

