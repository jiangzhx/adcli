// 由 oceanengine/ad_open_sdk_go models/model_advertiser_delivery_pkg_config_v3_0_response_data_industry_config.go 生成
// 不要手动编辑。

import type { AdvertiserDeliveryPkgConfigV30DataIndustryConfigIndustryStatus, AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigNecessariesInner, AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigUnnecessariesInner } from "../models/index";

export interface AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfig {
  config_id: number | string;
  industry_ids: (number | string)[];
  industry_names: string[];
  industry_status: AdvertiserDeliveryPkgConfigV30DataIndustryConfigIndustryStatus;
  necessaries?: AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigNecessariesInner[];
  unnecessaries?: AdvertiserDeliveryPkgConfigV30ResponseDataIndustryConfigUnnecessariesInner[];
}

