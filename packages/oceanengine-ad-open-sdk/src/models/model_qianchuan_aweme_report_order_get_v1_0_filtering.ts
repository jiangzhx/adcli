// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_report_order_get_v1_0_filtering.go 生成
// 不要手动编辑。

import type { QianchuanAwemeReportOrderGetV10FilteringExternalAction, QianchuanAwemeReportOrderGetV10FilteringMarketingGoal } from "../models/index";

export interface QianchuanAwemeReportOrderGetV10Filtering {
  ad_ids?: (number | string)[];
  external_action?: QianchuanAwemeReportOrderGetV10FilteringExternalAction;
  marketing_goal: QianchuanAwemeReportOrderGetV10FilteringMarketingGoal;
}

