// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StdProjectCreateV30AdType, StdProjectCreateV30AigcDynamicCreativeSwitch, StdProjectCreateV30AppPromotionType, StdProjectCreateV30AppType, StdProjectCreateV30AudienceType, StdProjectCreateV30AutoExtendTraffic, StdProjectCreateV30BidType, StdProjectCreateV30BudgetMode, StdProjectCreateV30DeepBidType, StdProjectCreateV30DeepExternalAction, StdProjectCreateV30DeliveryMedium, StdProjectCreateV30DeliveryMode, StdProjectCreateV30DownloadMode, StdProjectCreateV30DownloadType, StdProjectCreateV30ExternalAction, StdProjectCreateV30IsCommentDisable, StdProjectCreateV30LandingType, StdProjectCreateV30LaunchType, StdProjectCreateV30MarketingGoal, StdProjectCreateV30NativeType, StdProjectCreateV30Pricing, StdProjectCreateV30RequestAudience, StdProjectCreateV30RequestBrandInfo, StdProjectCreateV30RequestInternalAdvertiserInfo, StdProjectCreateV30RequestKeywordsInner, StdProjectCreateV30RequestProjectMaterials, StdProjectCreateV30RequestTrackUrlSetting, StdProjectCreateV30ScheduleType, StdProjectCreateV30SearchContinueDelivery, StdProjectCreateV30StarAutoDeliverySwitch } from "../models";

export interface StdProjectCreateV30Request {
  ad_type: StdProjectCreateV30AdType;
  advertiser_id: number;
  aigc_dynamic_creative_switch?: StdProjectCreateV30AigcDynamicCreativeSwitch;
  app_name?: string;
  app_promotion_type?: StdProjectCreateV30AppPromotionType;
  app_type?: StdProjectCreateV30AppType;
  asset_id?: number;
  audience?: StdProjectCreateV30RequestAudience;
  audience_type: StdProjectCreateV30AudienceType;
  auto_extend_traffic?: StdProjectCreateV30AutoExtendTraffic;
  aweme_id?: string;
  bid?: number;
  bid_type: StdProjectCreateV30BidType;
  blue_flow_keyword_name?: string[];
  brand_info?: StdProjectCreateV30RequestBrandInfo;
  budget?: number;
  budget_mode: StdProjectCreateV30BudgetMode;
  cpa_bid?: number;
  deep_bid_type?: StdProjectCreateV30DeepBidType;
  deep_cpabid?: number;
  deep_external_action?: StdProjectCreateV30DeepExternalAction;
  delivery_medium?: StdProjectCreateV30DeliveryMedium;
  delivery_mode: StdProjectCreateV30DeliveryMode;
  download_mode?: StdProjectCreateV30DownloadMode;
  download_type?: StdProjectCreateV30DownloadType;
  download_url?: string;
  end_time?: string;
  external_action: StdProjectCreateV30ExternalAction;
  first_roi_goal?: number;
  game_addiction_id?: string;
  internal_advertiser_info?: StdProjectCreateV30RequestInternalAdvertiserInfo;
  is_comment_disable?: StdProjectCreateV30IsCommentDisable;
  keywords?: StdProjectCreateV30RequestKeywordsInner[];
  landing_type: StdProjectCreateV30LandingType;
  launch_type?: StdProjectCreateV30LaunchType;
  marketing_goal: StdProjectCreateV30MarketingGoal;
  name: string;
  native_type: StdProjectCreateV30NativeType;
  pricing: StdProjectCreateV30Pricing;
  product_id?: number;
  product_platform_id?: number;
  project_materials?: StdProjectCreateV30RequestProjectMaterials;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type: StdProjectCreateV30ScheduleType;
  search_continue_delivery?: StdProjectCreateV30SearchContinueDelivery;
  star_auto_delivery_switch?: StdProjectCreateV30StarAutoDeliverySwitch;
  star_task_id_list?: number[];
  start_time?: string;
  subscribe_url?: string;
  track_url_setting?: StdProjectCreateV30RequestTrackUrlSetting;
  unique_product_id?: number;
}

