// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { GlobalSpec, PageSpecsListStruct, ShareContentSpec } from "../models";

export interface WechatPagesCustomAddRequest {
  account_id?: number | string;
  page_name?: string;
  page_specs_list?: PageSpecsListStruct[];
  global_spec?: GlobalSpec;
  share_content_spec?: ShareContentSpec;
}

