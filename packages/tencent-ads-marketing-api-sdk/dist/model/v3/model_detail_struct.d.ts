import type { ExtraProperty, MarketingAssetType, MarketingTargetType, PropertyStruct } from "../v3/index";
export interface DetailStruct {
    marketing_asset_id?: number | string;
    marketing_asset_name?: string;
    marketing_asset_type?: MarketingAssetType;
    marketing_target_type?: MarketingTargetType;
    created_time?: number;
    properties?: PropertyStruct[];
    extra_properties?: ExtraProperty[];
}
