// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeBillInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerProgressInfo } from "../models";

export interface StarChallengeInfoV2ResponseDataTaskInfoListInner {
  audit_info?: string;
  challenge_audit_status?: number;
  challenge_bill_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeBillInfo;
  challenge_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerChallengeInfo;
  challenge_task_id?: number;
  challenge_task_status?: number;
  create_time?: number;
  demand_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfo;
  progress_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerProgressInfo;
}

