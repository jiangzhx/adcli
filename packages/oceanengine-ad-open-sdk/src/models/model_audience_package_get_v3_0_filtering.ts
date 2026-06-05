// 由 oceanengine/ad_open_sdk_go models/model_audience_package_get_v3_0_filtering.go 生成
// 不要手动编辑。

import type { AudiencePackageGetV30FilteringAdType, AudiencePackageGetV30FilteringDeliveryRange, AudiencePackageGetV30FilteringLandingType, AudiencePackageGetV30FilteringMarketingGoal } from "../models/index";

export interface AudiencePackageGetV30Filtering {
  ad_type?: AudiencePackageGetV30FilteringAdType;
  delivery_range?: AudiencePackageGetV30FilteringDeliveryRange;
  landing_type?: AudiencePackageGetV30FilteringLandingType;
  marketing_goal?: AudiencePackageGetV30FilteringMarketingGoal;
  name?: string;
}

