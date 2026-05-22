// Generated from tencentad/marketing-api-go-sdk pkg/model/model_batch_async_request_task_spec.go
// Do not edit manually.

import type { DeleteAdItem, DeleteAdgroupItem, DeleteCampaignItem, DeleteFinderObjectCommentItem, ReplyFinderObjectCommentItem, TargetingsShareItem, UpdateAdConfiguredStatusItem, UpdateAdcreativeDeepLinkUrlItem, UpdateAdcreativeLandingPageItem, UpdateAdgroupAppAndroidChannelPackageIdItem, UpdateAdgroupAutoAcquisitionItem, UpdateAdgroupConfiguredStatusItem, UpdateAdgroupDailyBudgetItem, UpdateAdgroupDeepConversionWorthAdvancedRateItem, UpdateAdgroupDeepConversionWorthRateItem, UpdateBidStrategyItem, UpdateCampaignConfiguredStatusItem, UpdateCampaignDailyBudgetItem, UpdateCampaignSpeedModeItem, UpdateDeepConversionBehaviorAdvancedBidItem, UpdateDeepConversionBehaviorBidItem, UpdateExcludeUnionPositionPackageItem, UpdateFinderObjectCommentFlagItem, UpdateTargetingIdItem, UpdateUnionPositionPackageItem } from "../model/index";

export interface BatchAsyncRequestTaskSpec {
  update_union_position_package_spec?: UpdateUnionPositionPackageItem[];
  update_exclude_union_position_package_spec?: UpdateExcludeUnionPositionPackageItem[];
  update_targeting_id_spec?: UpdateTargetingIdItem[];
  update_bid_strategy_spec?: UpdateBidStrategyItem[];
  update_deep_conversion_behavior_bid_spec?: UpdateDeepConversionBehaviorBidItem[];
  update_adgroup_app_android_channel_package_id_spec?: UpdateAdgroupAppAndroidChannelPackageIdItem[];
  update_campaign_speed_mode_spec?: UpdateCampaignSpeedModeItem[];
  delete_campaign_spec?: DeleteCampaignItem[];
  delete_adgroup_spec?: DeleteAdgroupItem[];
  delete_ad_spec?: DeleteAdItem[];
  update_adgroup_deep_conversion_worth_rate_spec?: UpdateAdgroupDeepConversionWorthRateItem[];
  update_adcreative_deep_link_url_spec?: UpdateAdcreativeDeepLinkUrlItem[];
  targetings_share_spec?: TargetingsShareItem[];
  update_campaign_configured_status_spec?: UpdateCampaignConfiguredStatusItem[];
  update_campaign_daily_budget_spec?: UpdateCampaignDailyBudgetItem[];
  update_adgroup_configured_status_spec?: UpdateAdgroupConfiguredStatusItem[];
  update_adgroup_daily_budget_spec?: UpdateAdgroupDailyBudgetItem[];
  update_ad_configured_status_spec?: UpdateAdConfiguredStatusItem[];
  update_adgroup_auto_acquisition_spec?: UpdateAdgroupAutoAcquisitionItem[];
  update_adcreative_landing_page_spec?: UpdateAdcreativeLandingPageItem[];
  update_adgroup_deep_conversion_worth_advanced_rate_spec?: UpdateAdgroupDeepConversionWorthAdvancedRateItem[];
  update_deep_conversion_behavior_advanced_bid_spec?: UpdateDeepConversionBehaviorAdvancedBidItem[];
  reply_finder_object_comment_spec?: ReplyFinderObjectCommentItem[];
  update_finder_object_comment_flag_spec?: UpdateFinderObjectCommentFlagItem[];
  delete_finder_object_comment_spec?: DeleteFinderObjectCommentItem[];
}

