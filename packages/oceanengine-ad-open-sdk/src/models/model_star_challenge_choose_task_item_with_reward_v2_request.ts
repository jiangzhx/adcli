// 由 oceanengine/ad_open_sdk_go models/model_star_challenge_choose_task_item_with_reward_v2_request.go 生成
// 不要手动编辑。

import type { StarChallengeChooseTaskItemWithRewardV2RequestItemRewardsInner } from "../models/index";

export interface StarChallengeChooseTaskItemWithRewardV2Request {
  challenge_task_id: number | string;
  item_rewards: StarChallengeChooseTaskItemWithRewardV2RequestItemRewardsInner[];
  star_id: number | string;
}

