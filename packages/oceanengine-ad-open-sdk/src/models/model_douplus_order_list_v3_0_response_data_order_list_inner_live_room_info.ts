// 由 oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_response_data_order_list_inner_live_room_info.go 生成
// 不要手动编辑。

import type { DouplusOrderListV30DataOrderListLiveRoomInfoRoomStatus } from "../models/index";

export interface DouplusOrderListV30ResponseDataOrderListInnerLiveRoomInfo {
  room_cover?: string[];
  room_id?: number | string;
  room_status?: DouplusOrderListV30DataOrderListLiveRoomInfoRoomStatus;
  room_title?: string;
}

