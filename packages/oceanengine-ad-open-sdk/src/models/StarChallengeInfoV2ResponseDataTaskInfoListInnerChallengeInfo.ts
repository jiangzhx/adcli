// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoParticipateAuthorRange, StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfoSettlementInfo } from "../models";

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

