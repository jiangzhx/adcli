// Generated from oceanengine/ad_open_sdk_go models/model_star_challenge_info_v2_response_data_task_info_list_inner_challenge_info.go
// Do not edit manually.

import type { StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoParticipateAuthorRange, StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoSettlementInfo } from "../models/index";

export interface StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfo {
  author_task_name: string;
  budget: number;
  end_time: number;
  max_upload_item_cnt: number;
  participate_author_range: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoParticipateAuthorRange;
  sample_delivery: number;
  sample_video?: number[];
  settlement_info: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoSettlementInfo;
  start_time: number;
  task_head_image?: string;
  task_icon: string;
}

