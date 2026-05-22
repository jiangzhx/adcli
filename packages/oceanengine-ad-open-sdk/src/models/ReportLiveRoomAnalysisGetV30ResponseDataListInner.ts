// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportLiveRoomAnalysisGetV30DataListRoomStatus, ReportLiveRoomAnalysisGetV30ResponseDataListInnerFields } from "../models";

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

