// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CgTransferCreateTransferV30RequestTargetAccountDetailListInner, CgTransferCreateTransferV30TransferDirection } from "../models";

export interface CgTransferCreateTransferV30Request {
  account_id: number;
  agent_id: number;
  biz_request_no: string;
  remark?: string;
  target_account_detail_list: CgTransferCreateTransferV30RequestTargetAccountDetailListInner[];
  transfer_direction: CgTransferCreateTransferV30TransferDirection;
}

