// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_pages_custom_add_request.go
// Do not edit manually.

import type { GlobalSpec, PageSpecsListStruct, ShareContentSpec } from "../model/index";

export interface WechatPagesCustomAddRequest {
  account_id?: number | string;
  page_name?: string;
  page_specs_list?: PageSpecsListStruct[];
  global_spec?: GlobalSpec;
  share_content_spec?: ShareContentSpec;
}

