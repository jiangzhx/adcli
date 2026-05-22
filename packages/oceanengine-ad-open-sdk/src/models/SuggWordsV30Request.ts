// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SuggWordsV30RequestPromotionMaterials } from "../models";

export interface SuggWordsV30Request {
  advertiser_id: number;
  project_id?: number;
  promotion_materials?: SuggWordsV30RequestPromotionMaterials;
  query_list?: string[];
}

