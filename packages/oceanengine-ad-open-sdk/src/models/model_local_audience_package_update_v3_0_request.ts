// 由 oceanengine/ad_open_sdk_go models/model_local_audience_package_update_v3_0_request.go 生成
// 不要手动编辑。

import type { LocalAudiencePackageUpdateV30Age, LocalAudiencePackageUpdateV30ConvertedTimeDuration, LocalAudiencePackageUpdateV30CustomizedInterestAction, LocalAudiencePackageUpdateV30District, LocalAudiencePackageUpdateV30FilterAwemeAbnormalActive, LocalAudiencePackageUpdateV30FilterAwemeFansCount, LocalAudiencePackageUpdateV30Gender, LocalAudiencePackageUpdateV30HideIfConverted, LocalAudiencePackageUpdateV30RequestActionConfig, LocalAudiencePackageUpdateV30RequestCustomArea, LocalAudiencePackageUpdateV30RequestInterestConfig, LocalAudiencePackageUpdateV30RequestPoiAround, LocalAudiencePackageUpdateV30RequestRegion } from "../models/index";

export interface LocalAudiencePackageUpdateV30Request {
  action_config?: LocalAudiencePackageUpdateV30RequestActionConfig;
  age?: LocalAudiencePackageUpdateV30Age[];
  audience_package_id: number | string;
  converted_time_duration?: LocalAudiencePackageUpdateV30ConvertedTimeDuration;
  custom_area?: LocalAudiencePackageUpdateV30RequestCustomArea;
  customized_interest_action?: LocalAudiencePackageUpdateV30CustomizedInterestAction;
  description?: string;
  district?: LocalAudiencePackageUpdateV30District;
  filter_aweme_abnormal_active?: LocalAudiencePackageUpdateV30FilterAwemeAbnormalActive;
  filter_aweme_fans_count?: LocalAudiencePackageUpdateV30FilterAwemeFansCount;
  gender?: LocalAudiencePackageUpdateV30Gender;
  hide_if_converted?: LocalAudiencePackageUpdateV30HideIfConverted;
  interest_config?: LocalAudiencePackageUpdateV30RequestInterestConfig;
  local_account_id: number | string;
  name?: string;
  poi_around?: LocalAudiencePackageUpdateV30RequestPoiAround;
  region?: LocalAudiencePackageUpdateV30RequestRegion;
  retargeting_tags?: number[];
  retargeting_tags_exclude?: number[];
}

