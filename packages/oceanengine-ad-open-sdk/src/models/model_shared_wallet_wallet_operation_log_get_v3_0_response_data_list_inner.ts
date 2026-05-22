// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_wallet_operation_log_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { SharedWalletWalletOperationLogGetV30DataListStatus, SharedWalletWalletOperationLogGetV30DataListWalletOperationType, SharedWalletWalletOperationLogGetV30ResponseDataListInnerExtraInfo, SharedWalletWalletOperationLogGetV30ResponseDataListInnerOperationDetail } from "../models/index";

export interface SharedWalletWalletOperationLogGetV30ResponseDataListInner {
  business_time?: number;
  extra_info?: SharedWalletWalletOperationLogGetV30ResponseDataListInnerExtraInfo;
  operation_detail?: SharedWalletWalletOperationLogGetV30ResponseDataListInnerOperationDetail;
  operation_id?: number | string;
  operator?: string;
  status?: SharedWalletWalletOperationLogGetV30DataListStatus;
  wallet_id?: number | string;
  wallet_operation_type?: SharedWalletWalletOperationLogGetV30DataListWalletOperationType;
}

