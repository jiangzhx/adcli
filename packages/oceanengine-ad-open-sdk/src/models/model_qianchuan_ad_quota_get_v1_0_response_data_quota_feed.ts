// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_ad_quota_get_v1_0_response_data_quota_feed.go
// Do not edit manually.

import type { QianchuanAdQuotaGetV10ResponseDataQuotaFeedDeliveryInfo, QianchuanAdQuotaGetV10ResponseDataQuotaFeedQuotaInfo, QianchuanAdQuotaGetV10ResponseDataQuotaFeedStageInfo } from "../models/index";

export interface QianchuanAdQuotaGetV10ResponseDataQuotaFeed {
  delivery_info?: QianchuanAdQuotaGetV10ResponseDataQuotaFeedDeliveryInfo;
  month_cost?: number;
  quota_gear?: number;
  quota_info?: QianchuanAdQuotaGetV10ResponseDataQuotaFeedQuotaInfo;
  stage_info?: QianchuanAdQuotaGetV10ResponseDataQuotaFeedStageInfo;
}

