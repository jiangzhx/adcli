// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferCreateTransferV30RequestTargetAccountDetailListInner, CgTransferCreateTransferV30TransferDirection } from "../models";

export interface CgTransferCreateTransferV30Request {
  account_id: number | string;
  agent_id: number | string;
  biz_request_no: string;
  remark?: string;
  target_account_detail_list: CgTransferCreateTransferV30RequestTargetAccountDetailListInner[];
  transfer_direction: CgTransferCreateTransferV30TransferDirection;
}

