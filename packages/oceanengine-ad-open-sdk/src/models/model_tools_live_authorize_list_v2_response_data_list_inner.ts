// Generated from oceanengine/ad_open_sdk_go models/model_tools_live_authorize_list_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsLiveAuthorizeListV2DataListStatus, ToolsLiveAuthorizeListV2ResponseDataListInnerLimitedPromotionTypesInner } from "../models/index";

export interface ToolsLiveAuthorizeListV2ResponseDataListInner {
  advertiser_id?: number | string;
  authorize_end_time?: string;
  authorize_start_time?: string;
  create_time?: string;
  ies_id?: string;
  ies_user_name?: string;
  limited_promotion_types?: ToolsLiveAuthorizeListV2ResponseDataListInnerLimitedPromotionTypesInner[];
  status?: ToolsLiveAuthorizeListV2DataListStatus;
}

