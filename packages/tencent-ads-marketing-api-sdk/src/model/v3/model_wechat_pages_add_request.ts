// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_wechat_pages_add_request.go
// Do not edit manually.

import type { PageElementsStruct, ShareContentSpec } from "../v3/index";

export interface WechatPagesAddRequest {
  account_id?: number | string;
  page_name?: string;
  page_template_id?: number | string;
  page_elements_spec_list?: PageElementsStruct[];
  share_content_spec?: ShareContentSpec;
}

