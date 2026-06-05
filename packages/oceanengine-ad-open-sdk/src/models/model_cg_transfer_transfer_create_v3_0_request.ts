// 由 oceanengine/ad_open_sdk_go models/model_cg_transfer_transfer_create_v3_0_request.go 生成
// 不要手动编辑。

import type { CgTransferTransferCreateV30Platform, CgTransferTransferCreateV30RequestTargetDetailListInner, CgTransferTransferCreateV30TransferDirection } from "../models/index";

export interface CgTransferTransferCreateV30Request {
  biz_request_no: string;
  opponent_target_id: number | string;
  organization_id: number | string;
  platform: CgTransferTransferCreateV30Platform;
  remark?: string;
  target_detail_list: CgTransferTransferCreateV30RequestTargetDetailListInner[];
  transfer_direction: CgTransferTransferCreateV30TransferDirection;
}

