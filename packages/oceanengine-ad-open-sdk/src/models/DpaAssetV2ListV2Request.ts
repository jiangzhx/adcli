// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaAssetV2ListV2RequestFiltering } from "../models";

export interface DpaAssetV2ListV2Request {
  advertiser_id: number;
  filtering?: DpaAssetV2ListV2RequestFiltering;
  page?: number;
  page_size?: number;
  unique_product_ids: number[];
}

