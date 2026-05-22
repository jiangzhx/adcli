// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarDemandOmCreateChallengeV2ChallengeInfoAuthorScope, StarDemandOmCreateChallengeV2ChallengeInfoCommissionType, StarDemandOmCreateChallengeV2ChallengeInfoProviderScope, StarDemandOmCreateChallengeV2RequestChallengeInfoCommissionInfo, StarDemandOmCreateChallengeV2RequestChallengeInfoParticipateAuthorRange, StarDemandOmCreateChallengeV2RequestChallengeInfoParticipateProviderRange } from "../models";

export interface StarDemandOmCreateChallengeV2RequestChallengeInfo {
  account_divide_day: number;
  anchor_title: string;
  author_scope: StarDemandOmCreateChallengeV2ChallengeInfoAuthorScope;
  author_task_name: string;
  commission_info?: StarDemandOmCreateChallengeV2RequestChallengeInfoCommissionInfo;
  commission_rate?: number;
  commission_type: StarDemandOmCreateChallengeV2ChallengeInfoCommissionType;
  demand_desc?: string;
  episode_limit?: Record<string, number>;
  micro_app_id: string;
  om_task_tag: string[];
  participate_author_range?: StarDemandOmCreateChallengeV2RequestChallengeInfoParticipateAuthorRange;
  participate_provider_range?: StarDemandOmCreateChallengeV2RequestChallengeInfoParticipateProviderRange;
  provider_scope?: StarDemandOmCreateChallengeV2ChallengeInfoProviderScope;
  sample_video?: number[];
  start_page?: string;
  task_head_image?: string;
  task_icon: string;
}

