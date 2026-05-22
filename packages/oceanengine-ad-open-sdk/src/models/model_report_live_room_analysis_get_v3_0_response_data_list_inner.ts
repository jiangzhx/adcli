// Generated from oceanengine/ad_open_sdk_go models/model_report_live_room_analysis_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ReportLiveRoomAnalysisGetV30DataListRoomStatus, ReportLiveRoomAnalysisGetV30ResponseDataListInnerFields } from "../models/index";

export interface ReportLiveRoomAnalysisGetV30ResponseDataListInner {
  anchor_avatar?: string;
  anchor_id?: number | string;
  anchor_nick?: string;
  fields?: ReportLiveRoomAnalysisGetV30ResponseDataListInnerFields;
  room_cover?: string;
  room_create_time?: string;
  room_finish_time?: string;
  room_id?: number | string;
  room_qrcode?: string;
  room_status?: ReportLiveRoomAnalysisGetV30DataListRoomStatus;
  room_title?: string;
}

