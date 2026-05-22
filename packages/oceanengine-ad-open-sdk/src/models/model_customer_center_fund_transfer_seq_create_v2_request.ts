// Generated from oceanengine/ad_open_sdk_go models/model_customer_center_fund_transfer_seq_create_v2_request.go
// Do not edit manually.

import type { CustomerCenterFundTransferSeqCreateV2TransferType } from "../models/index";

export interface CustomerCenterFundTransferSeqCreateV2Request {
  advertiser_id: number | string;
  amount: number;
  target_advertiser_id: number | string;
  transfer_type: CustomerCenterFundTransferSeqCreateV2TransferType;
}

