// 由 oceanengine/ad_open_sdk_go models/model_star_vas_create_boost_item_group_v2_request_custom_audience_tag.go 生成
// 不要手动编辑。

import type { StarVasCreateBoostItemGroupV2CustomAudienceTagAge, StarVasCreateBoostItemGroupV2CustomAudienceTagGender } from "../models/index";

export interface StarVasCreateBoostItemGroupV2RequestCustomAudienceTag {
  age?: StarVasCreateBoostItemGroupV2CustomAudienceTagAge[];
  district?: string[];
  gender?: StarVasCreateBoostItemGroupV2CustomAudienceTagGender;
  interest_tag?: number[];
}

