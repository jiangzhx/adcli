// 由 oceanengine/ad_open_sdk_go models/model_shared_wallet_wallet_operation_log_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { SharedWalletWalletOperationLogGetV30ResponseDataListInner, SharedWalletWalletOperationLogGetV30ResponseDataPageInfo } from "../models/index";

export interface SharedWalletWalletOperationLogGetV30ResponseData {
  list?: SharedWalletWalletOperationLogGetV30ResponseDataListInner[];
  page_info?: SharedWalletWalletOperationLogGetV30ResponseDataPageInfo;
  wallet_id?: number | string;
}

