// Generated from oceanengine/ad_open_sdk_go models/model_star_demand_create_challenge_v2_request_challenge_info.go
// Do not edit manually.

import type { StarDemandCreateChallengeV2RequestChallengeInfoParticipateAuthorRange, StarDemandCreateChallengeV2RequestChallengeInfoParticipateMcnRange, StarDemandCreateChallengeV2RequestChallengeInfoParticipateProviderRange, StarDemandCreateChallengeV2RequestChallengeInfoSettlementInfo } from "../models/index";

export interface StarDemandCreateChallengeV2RequestChallengeInfo {
  author_choose_type?: number;
  author_no_threshold_task?: boolean;
  author_task_name: string;
  budget: number;
  challenge_play_type?: number;
  end_time: number;
  marketing_type?: number;
  max_upload_item_cnt: number;
  participate_author_range: StarDemandCreateChallengeV2RequestChallengeInfoParticipateAuthorRange;
  participate_mcn_range?: StarDemandCreateChallengeV2RequestChallengeInfoParticipateMcnRange;
  participate_provider_range?: StarDemandCreateChallengeV2RequestChallengeInfoParticipateProviderRange;
  sample_delivery: number;
  sample_video?: number[];
  settlement_info: StarDemandCreateChallengeV2RequestChallengeInfoSettlementInfo;
  start_time: number;
  task_head_image?: string;
  task_icon: string;
}

