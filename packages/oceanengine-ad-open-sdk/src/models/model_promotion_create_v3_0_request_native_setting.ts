// 由 oceanengine/ad_open_sdk_go models/model_promotion_create_v3_0_request_native_setting.go 生成
// 不要手动编辑。

import type { PromotionCreateV30NativeSettingAnchorRelatedType, PromotionCreateV30NativeSettingAwemeSettingType, PromotionCreateV30NativeSettingIsFeedAndFavSee } from "../models/index";

export interface PromotionCreateV30RequestNativeSetting {
  anchor_related_type?: PromotionCreateV30NativeSettingAnchorRelatedType;
  aweme_id?: string;
  aweme_ids?: string[];
  aweme_setting_type?: PromotionCreateV30NativeSettingAwemeSettingType;
  is_feed_and_fav_see?: PromotionCreateV30NativeSettingIsFeedAndFavSee;
}

