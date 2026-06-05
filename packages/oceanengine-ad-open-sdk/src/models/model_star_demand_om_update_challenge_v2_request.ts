// 由 oceanengine/ad_open_sdk_go models/model_star_demand_om_update_challenge_v2_request.go 生成
// 不要手动编辑。

import type { StarDemandOmUpdateChallengeV2RequestChallengeInfo, StarDemandOmUpdateChallengeV2RequestDemandInfo } from "../models/index";

export interface StarDemandOmUpdateChallengeV2Request {
  challenge_info: StarDemandOmUpdateChallengeV2RequestChallengeInfo;
  challenge_task_id: number | string;
  demand_info: StarDemandOmUpdateChallengeV2RequestDemandInfo;
  developer_id?: string;
  star_id: number | string;
}

