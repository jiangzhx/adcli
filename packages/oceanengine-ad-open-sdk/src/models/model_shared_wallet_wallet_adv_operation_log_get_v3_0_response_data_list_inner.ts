// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_wallet_adv_operation_log_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { SharedWalletWalletAdvOperationLogGetV30DataListStatus, SharedWalletWalletAdvOperationLogGetV30DataListWalletOperationType, SharedWalletWalletAdvOperationLogGetV30ResponseDataListInnerOperationDetail } from "../models/index";

export interface SharedWalletWalletAdvOperationLogGetV30ResponseDataListInner {
  adv_id?: number | string;
  adv_name?: string;
  operation_detail?: SharedWalletWalletAdvOperationLogGetV30ResponseDataListInnerOperationDetail;
  operation_id?: number | string;
  status?: SharedWalletWalletAdvOperationLogGetV30DataListStatus;
  wallet_id?: number | string;
  wallet_operation_type?: SharedWalletWalletAdvOperationLogGetV30DataListWalletOperationType;
}

