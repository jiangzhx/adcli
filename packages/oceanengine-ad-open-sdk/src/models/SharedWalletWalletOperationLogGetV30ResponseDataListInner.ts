// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SharedWalletWalletOperationLogGetV30DataListStatus, SharedWalletWalletOperationLogGetV30DataListWalletOperationType, SharedWalletWalletOperationLogGetV30ResponseDataListInnerExtraInfo, SharedWalletWalletOperationLogGetV30ResponseDataListInnerOperationDetail } from "../models";

export interface SharedWalletWalletOperationLogGetV30ResponseDataListInner {
  business_time?: number;
  extra_info?: SharedWalletWalletOperationLogGetV30ResponseDataListInnerExtraInfo;
  operation_detail?: SharedWalletWalletOperationLogGetV30ResponseDataListInnerOperationDetail;
  operation_id?: number;
  operator?: string;
  status?: SharedWalletWalletOperationLogGetV30DataListStatus;
  wallet_id?: number;
  wallet_operation_type?: SharedWalletWalletOperationLogGetV30DataListWalletOperationType;
}

