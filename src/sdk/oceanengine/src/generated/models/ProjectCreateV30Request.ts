// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ProjectCreateV30AdType, ProjectCreateV30AigcDynamicCreativeSwitch, ProjectCreateV30AppPromotionType, ProjectCreateV30AssetType, ProjectCreateV30AudienceExtend, ProjectCreateV30AutoExtendTraffic, ProjectCreateV30Classify, ProjectCreateV30DeliveryMode, ProjectCreateV30DeliveryType, ProjectCreateV30DownloadMode, ProjectCreateV30DownloadType, ProjectCreateV30DpaAdtype, ProjectCreateV30LandingPageStayTime, ProjectCreateV30LandingType, ProjectCreateV30LaunchType, ProjectCreateV30MarketingGoal, ProjectCreateV30MicroPromotionType, ProjectCreateV30MultiAssetType, ProjectCreateV30OpenUrlType, ProjectCreateV30Operation, ProjectCreateV30PromotionType, ProjectCreateV30RequestAudience, ProjectCreateV30RequestBlueFlowPackage, ProjectCreateV30RequestDeliveryRange, ProjectCreateV30RequestDeliverySetting, ProjectCreateV30RequestDpaProductTargetInner, ProjectCreateV30RequestKeywordsInner, ProjectCreateV30RequestNativeSetting, ProjectCreateV30RequestOptimizeGoal, ProjectCreateV30RequestRelatedProduct, ProjectCreateV30RequestTrackUrlSetting, ProjectCreateV30StarAutoDeliverySwitch, ProjectCreateV30StarAutoMaterialAdditionSwitch, ProjectCreateV30UlinkUrlType, ProjectCreateV30ValueOptimizedType } from "../models";

export interface ProjectCreateV30Request {
  ad_type: ProjectCreateV30AdType;
  advertiser_id: number;
  advertising_volume?: number;
  aigc_dynamic_creative_switch?: ProjectCreateV30AigcDynamicCreativeSwitch;
  app_name?: string;
  app_promotion_type?: ProjectCreateV30AppPromotionType;
  asset_type?: ProjectCreateV30AssetType;
  audience?: ProjectCreateV30RequestAudience;
  audience_extend?: ProjectCreateV30AudienceExtend;
  auto_extend_traffic?: ProjectCreateV30AutoExtendTraffic;
  blue_flow_package?: ProjectCreateV30RequestBlueFlowPackage;
  budget_group_id?: number;
  classify?: ProjectCreateV30Classify;
  delivery_mode?: ProjectCreateV30DeliveryMode;
  delivery_range: ProjectCreateV30RequestDeliveryRange;
  delivery_setting: ProjectCreateV30RequestDeliverySetting;
  delivery_type?: ProjectCreateV30DeliveryType;
  download_mode?: ProjectCreateV30DownloadMode;
  download_type?: ProjectCreateV30DownloadType;
  download_url?: string;
  dpa_adtype?: ProjectCreateV30DpaAdtype;
  dpa_product_target?: ProjectCreateV30RequestDpaProductTargetInner[];
  item_number?: string;
  keywords?: ProjectCreateV30RequestKeywordsInner[];
  landing_page_stay_time?: ProjectCreateV30LandingPageStayTime;
  landing_type: ProjectCreateV30LandingType;
  launch_type?: ProjectCreateV30LaunchType;
  marketing_goal: ProjectCreateV30MarketingGoal;
  micro_app_instance_id?: number;
  micro_promotion_type?: ProjectCreateV30MicroPromotionType;
  multi_asset_type?: ProjectCreateV30MultiAssetType;
  name: string;
  native_setting?: ProjectCreateV30RequestNativeSetting;
  open_url?: string;
  open_url_field?: string;
  open_url_params?: string;
  open_url_type?: ProjectCreateV30OpenUrlType;
  operation?: ProjectCreateV30Operation;
  optimize_goal?: ProjectCreateV30RequestOptimizeGoal;
  promotion_type?: ProjectCreateV30PromotionType;
  quick_app_id?: number;
  related_product?: ProjectCreateV30RequestRelatedProduct;
  rta_id?: number;
  search_bid_ratio?: number;
  star_auto_delivery_switch?: ProjectCreateV30StarAutoDeliverySwitch;
  star_auto_material_addition_switch?: ProjectCreateV30StarAutoMaterialAdditionSwitch;
  star_task_id?: number;
  subscribe_url?: string;
  track_url_setting?: ProjectCreateV30RequestTrackUrlSetting;
  ulink_url?: string;
  ulink_url_type?: ProjectCreateV30UlinkUrlType;
  value_optimized_type?: ProjectCreateV30ValueOptimizedType;
  yuntu_5a_brand_id?: number;
  yuntu_5a_brand_main_industry_id?: number;
}

