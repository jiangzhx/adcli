// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_marketing_asset_verification.go
// Do not edit manually.

import type { MarketingAssetVerificationLandingPageStruct, MarketingAssetVerificationStatus } from "../v3/index";

export interface MarketingAssetVerification {
  marketing_asset_verification_status?: MarketingAssetVerificationStatus;
  marketing_asset_verification_status_cn?: string;
  landing_page_list?: MarketingAssetVerificationLandingPageStruct[];
}

