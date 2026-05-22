// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionListV30DataListAdDownloadStatus, PromotionListV30DataListAigcDynamicCreativeSwitch, PromotionListV30DataListAutoExtendTraffic, PromotionListV30DataListBudgetMode, PromotionListV30DataListCreativeAutoGenerateSwitch, PromotionListV30DataListHasCarryMaterial, PromotionListV30DataListIsCommentDisable, PromotionListV30DataListLearningPhase, PromotionListV30DataListMaterialsType, PromotionListV30DataListOptStatus, PromotionListV30DataListStarAutoDeliverySwitch, PromotionListV30DataListStarAutoMaterialAdditionSwitch, PromotionListV30DataListStarTaskVersion, PromotionListV30DataListStatus, PromotionListV30DataListStatusFirst, PromotionListV30DataListStatusSecond, PromotionListV30ResponseDataListInnerBlueFlowPackage, PromotionListV30ResponseDataListInnerBrandInfo, PromotionListV30ResponseDataListInnerKeywordsInner, PromotionListV30ResponseDataListInnerMaterialScoreInfo, PromotionListV30ResponseDataListInnerNativeSetting, PromotionListV30ResponseDataListInnerPromotionMaterials, PromotionListV30ResponseDataListInnerPromotionRelatedProductInner, PromotionListV30ResponseDataListInnerShopMultiRoiGoalsInner } from "../models";

export interface PromotionListV30ResponseDataListInner {
  "7d_retention"?: number;
  ad_download_status?: PromotionListV30DataListAdDownloadStatus;
  advertiser_id?: number;
  aigc_dynamic_creative_switch?: PromotionListV30DataListAigcDynamicCreativeSwitch;
  auto_extend_traffic?: PromotionListV30DataListAutoExtendTraffic;
  bid?: number;
  blue_flow_package?: PromotionListV30ResponseDataListInnerBlueFlowPackage;
  brand_info?: PromotionListV30ResponseDataListInnerBrandInfo;
  budget?: number;
  budget_mode?: PromotionListV30DataListBudgetMode;
  config_id?: number;
  cpa_bid?: number;
  creative_auto_generate_switch?: PromotionListV30DataListCreativeAutoGenerateSwitch;
  deep_cpabid?: number;
  first_roi_goal?: number;
  has_carry_material?: PromotionListV30DataListHasCarryMaterial;
  if_newcustomerdelivery?: boolean;
  is_comment_disable?: PromotionListV30DataListIsCommentDisable;
  keywords?: PromotionListV30ResponseDataListInnerKeywordsInner[];
  learning_phase?: PromotionListV30DataListLearningPhase;
  material_score_info?: PromotionListV30ResponseDataListInnerMaterialScoreInfo;
  materials_type?: PromotionListV30DataListMaterialsType;
  native_setting?: PromotionListV30ResponseDataListInnerNativeSetting;
  opt_status?: PromotionListV30DataListOptStatus;
  project_id?: number;
  promotion_create_time?: string;
  promotion_id?: number;
  promotion_materials?: PromotionListV30ResponseDataListInnerPromotionMaterials;
  promotion_modify_time?: string;
  promotion_name?: string;
  promotion_related_product?: PromotionListV30ResponseDataListInnerPromotionRelatedProductInner[];
  roi_goal?: number;
  schedule_time?: string;
  shop_multi_roi_goals?: PromotionListV30ResponseDataListInnerShopMultiRoiGoalsInner[];
  source?: string;
  star_auto_delivery_switch?: PromotionListV30DataListStarAutoDeliverySwitch;
  star_auto_material_addition_switch?: PromotionListV30DataListStarAutoMaterialAdditionSwitch;
  star_task_id?: number;
  star_task_version?: PromotionListV30DataListStarTaskVersion;
  status?: PromotionListV30DataListStatus;
  status_first?: PromotionListV30DataListStatusFirst;
  status_second?: PromotionListV30DataListStatusSecond[];
  union_bid?: number;
  union_bid_ratio?: number;
  union_cpa_bid?: number;
  union_deep_cpabid?: number;
  union_roi_goal?: number;
}

