// 由 oceanengine/ad_open_sdk_go models/model_std_project_list_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { StdProjectListV30DataListAdType, StdProjectListV30DataListAigcDynamicCreativeSwitch, StdProjectListV30DataListAppPromotionType, StdProjectListV30DataListBidType, StdProjectListV30DataListBudgetMode, StdProjectListV30DataListDeepBidType, StdProjectListV30DataListDeepExternalAction, StdProjectListV30DataListDeliveryMedium, StdProjectListV30DataListDeliveryMode, StdProjectListV30DataListDownloadMode, StdProjectListV30DataListDownloadType, StdProjectListV30DataListExternalAction, StdProjectListV30DataListInventoryCatalog, StdProjectListV30DataListIsCommentDisable, StdProjectListV30DataListLandingType, StdProjectListV30DataListLaunchType, StdProjectListV30DataListMarketingGoal, StdProjectListV30DataListOptStatus, StdProjectListV30DataListPricing, StdProjectListV30DataListScheduleType, StdProjectListV30DataListSearchContinueDelivery, StdProjectListV30DataListStarAutoDeliverySwitch, StdProjectListV30DataListStatusFirst, StdProjectListV30DataListStatusSecond, StdProjectListV30ResponseDataListInnerAudience, StdProjectListV30ResponseDataListInnerBrandInfo, StdProjectListV30ResponseDataListInnerTrackUrlSetting } from "../models/index";

export interface StdProjectListV30ResponseDataListInner {
  ad_type?: StdProjectListV30DataListAdType;
  advertiser_id?: number | string;
  aigc_dynamic_creative_switch?: StdProjectListV30DataListAigcDynamicCreativeSwitch;
  app_name?: string;
  app_promotion_type?: StdProjectListV30DataListAppPromotionType;
  audience?: StdProjectListV30ResponseDataListInnerAudience;
  aweme_id?: string;
  bid?: number;
  bid_type?: StdProjectListV30DataListBidType;
  blue_flow_keyword_name?: string[];
  brand_id?: number | string;
  brand_info?: StdProjectListV30ResponseDataListInnerBrandInfo;
  brand_name?: string;
  budget?: number;
  budget_mode?: StdProjectListV30DataListBudgetMode;
  category_id?: string;
  cpa_bid?: number;
  deep_bid_type?: StdProjectListV30DataListDeepBidType;
  deep_cpabid?: number;
  deep_external_action?: StdProjectListV30DataListDeepExternalAction;
  delivery_medium?: StdProjectListV30DataListDeliveryMedium;
  delivery_mode?: StdProjectListV30DataListDeliveryMode;
  download_mode?: StdProjectListV30DataListDownloadMode;
  download_type?: StdProjectListV30DataListDownloadType;
  download_url?: string;
  end_time?: string;
  external_action?: StdProjectListV30DataListExternalAction;
  first_roi_goal?: number;
  game_addiction_id?: string;
  inventory_catalog?: StdProjectListV30DataListInventoryCatalog;
  is_comment_disable?: StdProjectListV30DataListIsCommentDisable;
  landing_type?: StdProjectListV30DataListLandingType;
  launch_type?: StdProjectListV30DataListLaunchType;
  marketing_goal?: StdProjectListV30DataListMarketingGoal;
  name?: string;
  native_type?: string;
  opt_status?: StdProjectListV30DataListOptStatus;
  package_name?: string;
  pricing?: StdProjectListV30DataListPricing;
  product_id?: string;
  product_platform_id?: number | string;
  project_create_time?: string;
  project_id?: number | string;
  project_modify_time?: string;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type?: StdProjectListV30DataListScheduleType;
  search_continue_delivery?: StdProjectListV30DataListSearchContinueDelivery;
  star_auto_delivery_switch?: StdProjectListV30DataListStarAutoDeliverySwitch;
  star_task_id_list?: number[];
  start_time?: string;
  status_first?: StdProjectListV30DataListStatusFirst;
  status_second?: StdProjectListV30DataListStatusSecond[];
  sub_brand_id?: string;
  sub_brand_name?: string;
  subscribe_url?: string;
  track_url_setting?: StdProjectListV30ResponseDataListInnerTrackUrlSetting;
  unique_product_id?: number | string;
}

