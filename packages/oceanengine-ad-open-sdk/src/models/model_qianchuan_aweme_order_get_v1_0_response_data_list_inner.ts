// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_order_get_v1_0_response_data_list_inner.go
// Do not edit manually.

import type { QianchuanAwemeOrderGetV10DataListMarketingGoal, QianchuanAwemeOrderGetV10DataListStatus, QianchuanAwemeOrderGetV10ResponseDataListInnerAwemeInfo, QianchuanAwemeOrderGetV10ResponseDataListInnerDeliverySetting, QianchuanAwemeOrderGetV10ResponseDataListInnerRoomInfo, QianchuanAwemeOrderGetV10ResponseDataListInnerVideoInfo } from "../models/index";

export interface QianchuanAwemeOrderGetV10ResponseDataListInner {
  ad_id?: number | string;
  aweme_info?: QianchuanAwemeOrderGetV10ResponseDataListInnerAwemeInfo;
  delivery_setting?: QianchuanAwemeOrderGetV10ResponseDataListInnerDeliverySetting;
  marketing_goal?: QianchuanAwemeOrderGetV10DataListMarketingGoal;
  order_create_time?: string;
  order_id?: number | string;
  room_info?: QianchuanAwemeOrderGetV10ResponseDataListInnerRoomInfo;
  status?: QianchuanAwemeOrderGetV10DataListStatus;
  video_info?: QianchuanAwemeOrderGetV10ResponseDataListInnerVideoInfo;
}

