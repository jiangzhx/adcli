// 由 oceanengine/ad_open_sdk_go models/model_event_manager_share_v3_0_response_data_error_list_inner.go 生成
// 不要手动编辑。

import type { EventManagerShareV30DataErrorListAllAccountType, EventManagerShareV30DataErrorListShareMode, EventManagerShareV30ResponseDataErrorListInnerAccountInfo } from "../models/index";

export interface EventManagerShareV30ResponseDataErrorListInner {
  account_info?: EventManagerShareV30ResponseDataErrorListInnerAccountInfo;
  all_account_type?: EventManagerShareV30DataErrorListAllAccountType;
  error_message?: string;
  share_mode?: EventManagerShareV30DataErrorListShareMode;
}

