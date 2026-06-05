// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_schedule_date_update_v1_0_request.go 生成
// 不要手动编辑。

import type { QianchuanAdScheduleDateUpdateV10ScheduleType } from "../models/index";

export interface QianchuanAdScheduleDateUpdateV10Request {
  ad_ids: (number | string)[];
  advertiser_id: number | string;
  end_time?: number;
  schedule_type: QianchuanAdScheduleDateUpdateV10ScheduleType;
}

