// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_share_v3_0_response_data_error_list_inner.go
// Do not edit manually.

import type { EventManagerShareV30DataErrorListAllAccountType, EventManagerShareV30DataErrorListShareMode, EventManagerShareV30ResponseDataErrorListInnerAccountInfo } from "../models/index";

export interface EventManagerShareV30ResponseDataErrorListInner {
  account_info?: EventManagerShareV30ResponseDataErrorListInnerAccountInfo;
  all_account_type?: EventManagerShareV30DataErrorListAllAccountType;
  error_message?: string;
  share_mode?: EventManagerShareV30DataErrorListShareMode;
}

