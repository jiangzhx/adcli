import type { CreativeAssetType } from "../v3/index";
export interface AssetSimilarityDetailUpdateRequest {
    account_id?: number | string;
    organization_id?: number | string;
    creative_asset_id?: string;
    creative_asset_type?: CreativeAssetType;
}
