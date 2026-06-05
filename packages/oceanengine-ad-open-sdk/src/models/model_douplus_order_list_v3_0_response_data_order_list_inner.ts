// 由 oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_response_data_order_list_inner.go 生成
// 不要手动编辑。

import type { DouplusOrderListV30ResponseDataOrderListInnerAdListInner, DouplusOrderListV30ResponseDataOrderListInnerItemInfoListInner, DouplusOrderListV30ResponseDataOrderListInnerLiveRoomInfo, DouplusOrderListV30ResponseDataOrderListInnerOrder } from "../models/index";

export interface DouplusOrderListV30ResponseDataOrderListInner {
  ad_list?: DouplusOrderListV30ResponseDataOrderListInnerAdListInner[];
  item_info_list?: DouplusOrderListV30ResponseDataOrderListInnerItemInfoListInner[];
  live_room_info?: DouplusOrderListV30ResponseDataOrderListInnerLiveRoomInfo;
  order?: DouplusOrderListV30ResponseDataOrderListInnerOrder;
}

