// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportStardeliveryTaskVideoDataGetV30DataListStarMaterialPurchaseMethod, ReportStardeliveryTaskVideoDataGetV30DataListStarMaterialType, ReportStardeliveryTaskVideoDataGetV30DataListStarVideoMaterialAssessment, ReportStardeliveryTaskVideoDataGetV30DataListStarVideoStatus } from "../models";

export interface ReportStardeliveryTaskVideoDataGetV30ResponseDataListInner {
  active?: number;
  active_pay?: number;
  active_register?: number;
  android_convert_cnt?: number;
  game_pay_count?: number;
  ies_avatar_url?: string;
  ies_nickname?: string;
  in_app_payment_amount_range?: number[];
  in_app_payment_amount_range_t1?: number[];
  in_app_stat_cost_range?: number[];
  in_app_stat_cost_range_t1?: number[];
  install_finish_cnt?: number;
  ios_convert_cnt?: number;
  isv_id?: number;
  isv_name?: string;
  material_id?: number;
  non_ad_stat_cost?: number;
  star_active_count?: number;
  star_active_pay_count?: number;
  star_active_register_count?: number;
  star_convert_cnt?: number;
  star_cpm?: number[];
  star_deep_purchase_count?: number;
  star_install_finish_count?: number;
  star_material_creative_orient?: string;
  star_material_display_format?: string;
  star_material_natural_views_t1?: number;
  star_material_purchase_method?: ReportStardeliveryTaskVideoDataGetV30DataListStarMaterialPurchaseMethod;
  star_material_stat_cost?: number;
  star_material_total_views?: number;
  star_material_type?: ReportStardeliveryTaskVideoDataGetV30DataListStarMaterialType;
  star_sale_material_stat_cost?: number;
  star_stat_cost?: number;
  star_task_id?: number;
  star_video_material_assessment?: ReportStardeliveryTaskVideoDataGetV30DataListStarVideoMaterialAssessment[];
  star_video_relate_promotion_count?: number;
  star_video_status?: ReportStardeliveryTaskVideoDataGetV30DataListStarVideoStatus;
  stat_android_cost?: number;
  stat_cost?: number;
  stat_ios_cost?: number;
  video_cover_url?: string;
  video_play_link?: string;
  video_title?: string;
}

