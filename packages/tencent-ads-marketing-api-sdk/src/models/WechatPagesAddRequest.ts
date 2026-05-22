// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { PageElementsStruct, ShareContentSpec } from "../models";

export interface WechatPagesAddRequest {
  account_id?: number | string;
  page_name?: string;
  page_template_id?: number | string;
  page_elements_spec_list?: PageElementsStruct[];
  share_content_spec?: ShareContentSpec;
}

