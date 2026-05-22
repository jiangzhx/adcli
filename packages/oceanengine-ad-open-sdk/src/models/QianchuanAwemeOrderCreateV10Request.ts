// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeOrderCreateV10MarketingGoal, QianchuanAwemeOrderCreateV10RequestAudience, QianchuanAwemeOrderCreateV10RequestDeliverySetting } from "../models";

export interface QianchuanAwemeOrderCreateV10Request {
  advertiser_id: number;
  audience?: QianchuanAwemeOrderCreateV10RequestAudience;
  aweme_id: number;
  aweme_item_id?: number;
  delivery_setting: QianchuanAwemeOrderCreateV10RequestDeliverySetting;
  marketing_goal: QianchuanAwemeOrderCreateV10MarketingGoal;
}

