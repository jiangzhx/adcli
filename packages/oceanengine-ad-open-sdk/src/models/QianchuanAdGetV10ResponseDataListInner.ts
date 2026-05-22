// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdGetV10DataListCampaignScene, QianchuanAdGetV10DataListLabAdType, QianchuanAdGetV10DataListMarketingGoal, QianchuanAdGetV10DataListMarketingScene, QianchuanAdGetV10DataListOptStatus, QianchuanAdGetV10DataListStatus, QianchuanAdGetV10ResponseDataListInnerAwemeInfoInner, QianchuanAdGetV10ResponseDataListInnerDeliverySetting, QianchuanAdGetV10ResponseDataListInnerProductInfoInner } from "../models";

export interface QianchuanAdGetV10ResponseDataListInner {
  ad_create_time?: string;
  ad_id?: number | string;
  ad_modify_time?: string;
  aweme_info?: QianchuanAdGetV10ResponseDataListInnerAwemeInfoInner[];
  campaign_id?: number | string;
  campaign_scene?: QianchuanAdGetV10DataListCampaignScene;
  delivery_setting?: QianchuanAdGetV10ResponseDataListInnerDeliverySetting;
  grab_first_screen_bid_adjust_rate?: number;
  grab_first_screen_switch?: boolean;
  lab_ad_type?: QianchuanAdGetV10DataListLabAdType;
  marketing_goal?: QianchuanAdGetV10DataListMarketingGoal;
  marketing_scene?: QianchuanAdGetV10DataListMarketingScene;
  name?: string;
  opt_status?: QianchuanAdGetV10DataListOptStatus;
  product_info?: QianchuanAdGetV10ResponseDataListInnerProductInfoInner[];
  status?: QianchuanAdGetV10DataListStatus;
}

