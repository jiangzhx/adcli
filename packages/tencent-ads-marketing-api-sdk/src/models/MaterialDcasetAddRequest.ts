// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { MarketingAssetOuterSpecV1, MarketingTargetType } from "../models";

export interface MaterialDcasetAddRequest {
  account_id?: number | string;
  image_id_list?: number[];
  media_id_list?: number[];
  marketing_asset_id?: number | string;
  marketing_target_type?: MarketingTargetType;
  marketing_asset_outer_spec?: MarketingAssetOuterSpecV1;
  set_name?: string;
}

