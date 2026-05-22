// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_marketing_target_assets_add_request.go
// Do not edit manually.

import type { MarketingAssetType, MarketingTargetType, PropertyStruct } from "../v3/index";

export interface MarketingTargetAssetsAddRequest {
  organization_id?: number | string;
  marketing_asset_name?: string;
  marketing_target_type?: MarketingTargetType;
  marketing_asset_type?: MarketingAssetType;
  properties?: PropertyStruct[];
}

