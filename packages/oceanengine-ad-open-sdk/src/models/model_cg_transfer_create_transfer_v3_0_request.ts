// Generated from oceanengine/ad_open_sdk_go models/model_cg_transfer_create_transfer_v3_0_request.go
// Do not edit manually.

import type { CgTransferCreateTransferV30RequestTargetAccountDetailListInner, CgTransferCreateTransferV30TransferDirection } from "../models/index";

export interface CgTransferCreateTransferV30Request {
  account_id: number | string;
  agent_id: number | string;
  biz_request_no: string;
  remark?: string;
  target_account_detail_list: CgTransferCreateTransferV30RequestTargetAccountDetailListInner[];
  transfer_direction: CgTransferCreateTransferV30TransferDirection;
}

