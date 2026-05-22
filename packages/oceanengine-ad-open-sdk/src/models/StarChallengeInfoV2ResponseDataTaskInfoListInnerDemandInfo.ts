// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoAdSyncConf, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoChallengeRequirement, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoComponentInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoCustomizeInfo, StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoDemandRequirement } from "../models";

export interface StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfo {
  accept_expiration_day?: number;
  ad_sync_conf?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoAdSyncConf;
  attachment_text?: string;
  attachments?: string[];
  attatchments_url?: string[];
  brand_name?: string;
  challenge_requirement?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoChallengeRequirement;
  component_click_monitor_url?: string;
  component_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoComponentInfo;
  contact_name?: string;
  contact_phone?: string;
  customize_info?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoCustomizeInfo;
  demand_name: string;
  demand_requirement?: StarChallengeInfoV2ResponseDataTaskInfoListInnerDemandInfoDemandRequirement;
  expect_remain_time?: number;
  goods_link?: string;
  ignore_script?: number;
  item_show_monitor_url?: string;
  product_category?: string[];
  product_industry?: string[];
  product_information?: string;
  product_name: string;
  promotion_target?: string;
}

