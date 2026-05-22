import type { MarketingAssetType, PropertyStruct } from "../models";
export interface MarketingAssetStruct {
    marketing_asset_id?: number | string;
    marketing_asset_name?: string;
    marketing_asset_type?: MarketingAssetType;
    created_time?: number;
    is_deleted?: boolean;
    properties?: PropertyStruct[];
}
