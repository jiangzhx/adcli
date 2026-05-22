// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_xijing_page_list_get_response_data.go
// Do not edit manually.

import type { PageInfo, PageStruct } from "../v3/index";

export interface XijingPageListGetResponseData {
  list?: PageStruct[];
  page_info?: PageInfo;
  total_pages?: number;
  page_size?: number;
  page_index?: number;
}

