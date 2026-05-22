// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { SharedWalletWalletAdvOperationLogGetV30DataListStatus, SharedWalletWalletAdvOperationLogGetV30DataListWalletOperationType, SharedWalletWalletAdvOperationLogGetV30ResponseDataListInnerOperationDetail } from "../models";

export interface SharedWalletWalletAdvOperationLogGetV30ResponseDataListInner {
  adv_id?: number;
  adv_name?: string;
  operation_detail?: SharedWalletWalletAdvOperationLogGetV30ResponseDataListInnerOperationDetail;
  operation_id?: number;
  status?: SharedWalletWalletAdvOperationLogGetV30DataListStatus;
  wallet_id?: number;
  wallet_operation_type?: SharedWalletWalletAdvOperationLogGetV30DataListWalletOperationType;
}

