// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_om_get_challenge_v2_response_data_task_info_challenge_info.go
// Do not edit manually.

import type { StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoAuthorListInner, StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoCommissionInfo, StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoParticipateAuthorRange, StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoSettlementInfo } from "../models/index";

export interface StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfo {
  account_divide_day?: number;
  anchor_title?: string;
  author_list?: StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoAuthorListInner[];
  author_scope?: number;
  author_task_name: string;
  budget: number;
  commission_info?: StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoCommissionInfo;
  commission_rate?: number;
  commission_type?: number;
  demand_desc?: string;
  end_time: number;
  episode_limit?: Record<string, number>;
  max_upload_item_cnt: number;
  micro_app_id?: string;
  om_task_status?: number;
  om_task_tag?: string[];
  participate_author_range: StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoParticipateAuthorRange;
  provider_scope?: number;
  sample_delivery: number;
  sample_video?: number[];
  settlement_info: StarDemandOmGetChallengeV2ResponseDataTaskInfoChallengeInfoSettlementInfo;
  start_page?: string;
  start_time: number;
  task_head_image?: string;
  task_icon: string;
}

