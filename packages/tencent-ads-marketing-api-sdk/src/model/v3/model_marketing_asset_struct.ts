// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_marketing_asset_struct.go
// Do not edit manually.

import type { MarketingAssetType, PropertyStruct } from "../v3/index";

export interface MarketingAssetStruct {
  marketing_asset_id?: number | string;
  marketing_asset_name?: string;
  marketing_asset_type?: MarketingAssetType;
  created_time?: number;
  is_deleted?: boolean;
  properties?: PropertyStruct[];
}

