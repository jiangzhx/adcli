// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { MarketingAssetType, MarketingTargetType, PropertyStruct } from "../models";

export interface MarketingTargetAssetsAddRequest {
  organization_id?: number | string;
  marketing_asset_name?: string;
  marketing_target_type?: MarketingTargetType;
  marketing_asset_type?: MarketingAssetType;
  properties?: PropertyStruct[];
}

