import type { MarketingAssetVerificationLandingPageStruct, MarketingAssetVerificationStatus } from "../models";
export interface MarketingAssetVerification {
    marketing_asset_verification_status?: MarketingAssetVerificationStatus;
    marketing_asset_verification_status_cn?: string;
    landing_page_list?: MarketingAssetVerificationLandingPageStruct[];
}
