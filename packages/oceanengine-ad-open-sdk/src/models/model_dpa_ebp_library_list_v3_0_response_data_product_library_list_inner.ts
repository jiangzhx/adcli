// Generated from oceanengine/ad_open_sdk_go models/model_dpa_ebp_library_list_v3_0_response_data_product_library_list_inner.go
// Do not edit manually.

import type { DpaEbpLibraryListV30ResponseDataProductLibraryListInnerConf } from "../models/index";

export interface DpaEbpLibraryListV30ResponseDataProductLibraryListInner {
  account_type?: number;
  advertiser_id?: number | string;
  backup_images?: string[];
  company_id?: number | string;
  conf?: DpaEbpLibraryListV30ResponseDataProductLibraryListInnerConf;
  create_time?: string;
  data_status?: string;
  history_account_id?: number | string;
  history_account_type?: number;
  modify_time?: string;
  name?: string;
  operate_auth?: number;
  platform_id?: number | string;
  source?: number;
  source_account_id?: number | string;
  source_account_type?: number;
  store_type?: number;
}

