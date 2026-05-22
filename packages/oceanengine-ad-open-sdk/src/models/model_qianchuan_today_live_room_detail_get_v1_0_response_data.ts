// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_today_live_room_detail_get_v1_0_response_data.go
// Do not edit manually.

import type { QianchuanTodayLiveRoomDetailGetV10DataRoomStatus } from "../models/index";

export interface QianchuanTodayLiveRoomDetailGetV10ResponseData {
  aweme_avatar?: string[];
  aweme_id?: number | string;
  aweme_name?: string;
  end_time?: string;
  room_cover?: string[];
  room_delivery?: number;
  room_id?: number | string;
  room_status?: QianchuanTodayLiveRoomDetailGetV10DataRoomStatus;
  room_title?: string;
  start_time?: string;
}

