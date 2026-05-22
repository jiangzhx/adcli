// Generated from oceanengine/ad_open_sdk_go models/model_promotion_list_v3_0_response_data_list_inner_native_setting.go
// Do not edit manually.

import type { PromotionListV30DataListNativeSettingAnchorRelatedType, PromotionListV30DataListNativeSettingAwemeSettingType, PromotionListV30DataListNativeSettingIsFeedAndFavSee } from "../models/index";

export interface PromotionListV30ResponseDataListInnerNativeSetting {
  anchor_related_type?: PromotionListV30DataListNativeSettingAnchorRelatedType;
  aweme_id?: string;
  aweme_ids?: string[];
  aweme_setting_type?: PromotionListV30DataListNativeSettingAwemeSettingType;
  exclude_aweme_ids?: string[];
  is_feed_and_fav_see?: PromotionListV30DataListNativeSettingIsFeedAndFavSee;
}

