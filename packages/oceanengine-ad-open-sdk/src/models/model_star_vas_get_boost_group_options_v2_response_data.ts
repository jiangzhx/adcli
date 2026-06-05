// 由 oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_group_options_v2_response_data.go 生成
// 不要手动编辑。

import type { StarVasGetBoostGroupOptionsV2ResponseDataCityLevelInner, StarVasGetBoostGroupOptionsV2ResponseDataDistrictInner, StarVasGetBoostGroupOptionsV2ResponseDataInterestTagInner } from "../models/index";

export interface StarVasGetBoostGroupOptionsV2ResponseData {
  city_level?: StarVasGetBoostGroupOptionsV2ResponseDataCityLevelInner[];
  district: StarVasGetBoostGroupOptionsV2ResponseDataDistrictInner[];
  interest_tag: StarVasGetBoostGroupOptionsV2ResponseDataInterestTagInner[];
}

