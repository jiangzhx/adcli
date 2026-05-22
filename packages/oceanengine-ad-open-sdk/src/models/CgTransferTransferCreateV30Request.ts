// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CgTransferTransferCreateV30Platform, CgTransferTransferCreateV30RequestTargetDetailListInner, CgTransferTransferCreateV30TransferDirection } from "../models";

export interface CgTransferTransferCreateV30Request {
  biz_request_no: string;
  opponent_target_id: number;
  organization_id: number;
  platform: CgTransferTransferCreateV30Platform;
  remark?: string;
  target_detail_list: CgTransferTransferCreateV30RequestTargetDetailListInner[];
  transfer_direction: CgTransferTransferCreateV30TransferDirection;
}

