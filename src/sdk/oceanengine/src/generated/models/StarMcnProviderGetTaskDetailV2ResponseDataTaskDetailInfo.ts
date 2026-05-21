// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoGameIndustryInfo, StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInner, StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoSmallAppInfo, StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoStarMicroGameUniteExtraInfo, StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoTaskRequirementInfo } from "../models";

export interface StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfo {
  account_divide_day?: number;
  author_scope?: number;
  brand?: string;
  budget?: number;
  challenge_play_type?: number;
  challenge_status?: number;
  cloud_link?: string;
  commission_rate?: number;
  commission_rate_iaap?: string;
  component_type?: number;
  convert_unit_amount?: number;
  cpm_vv_price?: number;
  create_time: string;
  demand_desc?: string;
  demand_icon?: string;
  demand_id: number;
  demand_name: string;
  demander_name?: string;
  evaluate_type?: number;
  expiration_time?: string;
  expiration_time_end?: string;
  first_class_category?: number;
  game_industry_info?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoGameIndustryInfo;
  high_profit_challenge?: boolean;
  mcn_profit_rate?: number;
  other?: string;
  pay_type?: number;
  playlet_category?: number;
  playlet_first_week?: number;
  playlet_gender?: number[];
  playlet_hot?: boolean;
  playlet_second_week?: number;
  playlet_theme?: number[];
  product_category?: number;
  product_information?: string;
  product_name?: string;
  product_release_time?: string;
  profit_rate_channel?: Record<string, number>;
  provider_task_type?: number;
  relation_object_info?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoRelationObjectInfoInner[];
  second_class_category?: number;
  small_app_info?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoSmallAppInfo;
  star_micro_game_unite_extra_info?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoStarMicroGameUniteExtraInfo;
  task_category?: number;
  task_classification?: number;
  task_detail_url?: string;
  task_head_image?: string;
  task_participate_url?: string;
  task_requirement_info?: StarMcnProviderGetTaskDetailV2ResponseDataTaskDetailInfoTaskRequirementInfo;
  task_support_ad?: boolean;
  video_type: number;
}

