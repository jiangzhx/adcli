// Generated from oceanengine/ad_open_sdk_go models/model_douplus_order_create_v3_0_request.go
// Do not edit manually.

import type { DouplusOrderCreateV30BidType, DouplusOrderCreateV30ExternalAction, DouplusOrderCreateV30LiveroomHeatMode, DouplusOrderCreateV30RequestObjectInfosInner, DouplusOrderCreateV30RequestTargeting } from "../models/index";

export interface DouplusOrderCreateV30Request {
  aweme_sec_uid: string;
  bid_price?: number;
  bid_type?: DouplusOrderCreateV30BidType;
  budget: number;
  delivery_time: number;
  external_action: DouplusOrderCreateV30ExternalAction;
  liveroom_heat_mode?: DouplusOrderCreateV30LiveroomHeatMode[];
  object_infos: DouplusOrderCreateV30RequestObjectInfosInner[];
  rta_id?: number | string;
  targeting?: DouplusOrderCreateV30RequestTargeting;
}

