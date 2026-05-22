import type { MarketingAssetType, MarketingTargetType, PropertyStruct } from "../v3/index";
export interface MarketingTargetAssetsAddRequest {
    organization_id?: number | string;
    marketing_asset_name?: string;
    marketing_target_type?: MarketingTargetType;
    marketing_asset_type?: MarketingAssetType;
    properties?: PropertyStruct[];
}
