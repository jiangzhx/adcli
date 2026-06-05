// 由 oceanengine/ad_open_sdk_go models/model_star_demand_om_create_challenge_v2_request.go 生成
// 不要手动编辑。

import type { StarDemandOmCreateChallengeV2RequestChallengeInfo, StarDemandOmCreateChallengeV2RequestDemandInfo } from "../models/index";

export interface StarDemandOmCreateChallengeV2Request {
  challenge_info: StarDemandOmCreateChallengeV2RequestChallengeInfo;
  demand_info: StarDemandOmCreateChallengeV2RequestDemandInfo;
  developer_id?: number | string;
  star_id: number | string;
}

