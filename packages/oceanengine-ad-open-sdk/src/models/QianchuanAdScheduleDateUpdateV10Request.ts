// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdScheduleDateUpdateV10ScheduleType } from "../models";

export interface QianchuanAdScheduleDateUpdateV10Request {
  ad_ids: number | string[];
  advertiser_id: number | string;
  end_time?: number;
  schedule_type: QianchuanAdScheduleDateUpdateV10ScheduleType;
}

