// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ProjectListV30DataListAdType, ProjectListV30DataListAigcDynamicCreativeSwitch, ProjectListV30DataListAppPromotionType, ProjectListV30DataListAssetType, ProjectListV30DataListAutoExtendTraffic, ProjectListV30DataListDeliveryMedium, ProjectListV30DataListDeliveryMode, ProjectListV30DataListDeliveryProduct, ProjectListV30DataListDeliveryType, ProjectListV30DataListDownloadMode, ProjectListV30DataListDownloadType, ProjectListV30DataListDpaAdtype, ProjectListV30DataListLandingPageStayTime, ProjectListV30DataListLandingType, ProjectListV30DataListLaunchType, ProjectListV30DataListMarketingGoal, ProjectListV30DataListMicroPromotionType, ProjectListV30DataListMultiAssetType, ProjectListV30DataListMultiDeliveryMedium, ProjectListV30DataListOpenUrlType, ProjectListV30DataListOptStatus, ProjectListV30DataListPricing, ProjectListV30DataListPromotionType, ProjectListV30DataListStarAutoDeliverySwitch, ProjectListV30DataListStarAutoMaterialAdditionSwitch, ProjectListV30DataListStarTaskVersion, ProjectListV30DataListStatus, ProjectListV30DataListStatusFirst, ProjectListV30DataListStatusSecond, ProjectListV30DataListUlinkType, ProjectListV30DataListValueOptimizedType, ProjectListV30ResponseDataListInnerAudience, ProjectListV30ResponseDataListInnerBlueFlowPackage, ProjectListV30ResponseDataListInnerDeliveryRange, ProjectListV30ResponseDataListInnerDeliverySetting, ProjectListV30ResponseDataListInnerDpaProductTargetInner, ProjectListV30ResponseDataListInnerInternalAdvertiserInfo, ProjectListV30ResponseDataListInnerKeywordsInner, ProjectListV30ResponseDataListInnerNativeSetting, ProjectListV30ResponseDataListInnerOptimizeGoal, ProjectListV30ResponseDataListInnerRelatedProduct, ProjectListV30ResponseDataListInnerTrackUrlSetting } from "../models";

export interface ProjectListV30ResponseDataListInner {
  ad_type?: ProjectListV30DataListAdType;
  advertiser_id?: number | string;
  aigc_dynamic_creative_switch?: ProjectListV30DataListAigcDynamicCreativeSwitch;
  app_name?: string;
  app_promotion_type?: ProjectListV30DataListAppPromotionType;
  asset_type?: ProjectListV30DataListAssetType;
  audience?: ProjectListV30ResponseDataListInnerAudience;
  audience_extend?: string;
  auto_extend_traffic?: ProjectListV30DataListAutoExtendTraffic;
  blue_flow_package?: ProjectListV30ResponseDataListInnerBlueFlowPackage;
  budget_group_id?: number | string;
  delivery_medium?: ProjectListV30DataListDeliveryMedium;
  delivery_mode?: ProjectListV30DataListDeliveryMode;
  delivery_product?: ProjectListV30DataListDeliveryProduct;
  delivery_range?: ProjectListV30ResponseDataListInnerDeliveryRange;
  delivery_setting?: ProjectListV30ResponseDataListInnerDeliverySetting;
  delivery_type?: ProjectListV30DataListDeliveryType;
  download_mode?: ProjectListV30DataListDownloadMode;
  download_type?: ProjectListV30DataListDownloadType;
  download_url?: string;
  dpa_adtype?: ProjectListV30DataListDpaAdtype;
  dpa_categories?: number[];
  dpa_product_target?: ProjectListV30ResponseDataListInnerDpaProductTargetInner[];
  duration_count?: number;
  feed_delivery_search?: string;
  if_newcustomerdelivery?: boolean;
  internal_advertiser_info?: ProjectListV30ResponseDataListInnerInternalAdvertiserInfo;
  keywords?: ProjectListV30ResponseDataListInnerKeywordsInner[];
  landing_page_stay_time?: ProjectListV30DataListLandingPageStayTime;
  landing_type?: ProjectListV30DataListLandingType;
  launch_type?: ProjectListV30DataListLaunchType;
  marketing_goal?: ProjectListV30DataListMarketingGoal;
  micro_app_instance_id?: number | string;
  micro_promotion_type?: ProjectListV30DataListMicroPromotionType;
  multi_asset_type?: ProjectListV30DataListMultiAssetType;
  multi_delivery_medium?: ProjectListV30DataListMultiDeliveryMedium;
  name?: string;
  native_setting?: ProjectListV30ResponseDataListInnerNativeSetting;
  open_url?: string;
  open_url_field?: string;
  open_url_params?: string;
  open_url_type?: ProjectListV30DataListOpenUrlType;
  opt_status?: ProjectListV30DataListOptStatus;
  optimize_goal?: ProjectListV30ResponseDataListInnerOptimizeGoal;
  package_name?: string;
  pricing?: ProjectListV30DataListPricing;
  project_create_time?: string;
  project_id?: number | string;
  project_modify_time?: string;
  promotion_type?: ProjectListV30DataListPromotionType;
  quick_app_id?: number | string;
  related_product?: ProjectListV30ResponseDataListInnerRelatedProduct;
  search_bid_ratio?: number;
  star_auto_delivery_switch?: ProjectListV30DataListStarAutoDeliverySwitch;
  star_auto_material_addition_switch?: ProjectListV30DataListStarAutoMaterialAdditionSwitch;
  star_task_id?: number | string;
  star_task_version?: ProjectListV30DataListStarTaskVersion;
  status?: ProjectListV30DataListStatus;
  status_first?: ProjectListV30DataListStatusFirst;
  status_second?: ProjectListV30DataListStatusSecond[];
  subscribe_url?: string;
  track_url_setting?: ProjectListV30ResponseDataListInnerTrackUrlSetting;
  ulink_type?: ProjectListV30DataListUlinkType;
  ulink_url?: string;
  value_optimized_type?: ProjectListV30DataListValueOptimizedType;
  yuntu_5a_brand_id?: number | string;
  yuntu_5a_brand_main_industry_id?: number | string;
  yuntu_5a_brand_name?: string;
  yuntu_5a_industry_name?: string;
}

