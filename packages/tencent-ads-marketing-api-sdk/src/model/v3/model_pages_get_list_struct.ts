// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_pages_get_list_struct.go
// Do not edit manually.

import type { PageStatus, PageType } from "../v3/index";

export interface PagesGetListStruct {
  page_type?: PageType;
  page_id?: number | string;
  page_name?: string;
  page_url?: string;
  page_status?: PageStatus;
  owner_account_id?: number | string;
  created_time?: number;
  last_modified_time?: number;
  disable_code?: number;
  disable_message?: string;
}

