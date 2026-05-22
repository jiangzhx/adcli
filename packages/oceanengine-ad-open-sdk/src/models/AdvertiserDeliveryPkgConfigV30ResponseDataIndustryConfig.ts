// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserDeliveryPkgConfigV30DataIndustryConfigIndustryStatus, AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigNecessariesInner, AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigUnnecessariesInner } from "../models";

export interface AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfig {
  config_id: number;
  industry_ids: number[];
  industry_names: string[];
  industry_status: AdvertiserDeliveryPkgConfigV30DataIndustryConfigIndustryStatus;
  necessaries?: AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigNecessariesInner[];
  unnecessaries?: AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigUnnecessariesInner[];
}

