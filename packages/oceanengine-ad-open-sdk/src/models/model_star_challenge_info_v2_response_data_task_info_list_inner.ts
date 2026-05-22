// Generated from oceanengine/ad_open_sdk_go models/model_star_challenge_info_v2_response_data_task_info_list_inner.go
// Do not edit manually.

import type { StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeBillInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerProgressInfo } from "../models/index";

export interface StarChallengeInfoV2ResponseDataTaskInfoListInner {
  audit_info?: string;
  challenge_audit_status?: number;
  challenge_bill_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeBillInfo;
  challenge_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfo;
  challenge_task_id?: number | string;
  challenge_task_status?: number;
  create_time?: number;
  demand_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfo;
  progress_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerProgressInfo;
}

