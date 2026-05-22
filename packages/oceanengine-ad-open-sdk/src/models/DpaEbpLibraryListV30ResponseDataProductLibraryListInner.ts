// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpLibraryListV30ResponseDataProductLibraryListInnerConf } from "../models";

export interface DpaEbpLibraryListV30ResponseDataProductLibraryListInner {
  account_type?: number;
  advertiser_id?: number;
  backup_images?: string[];
  company_id?: number;
  conf?: DpaEbpLibraryListV30ResponseDataProductLibraryListInnerConf;
  create_time?: string;
  data_status?: string;
  history_account_id?: number;
  history_account_type?: number;
  modify_time?: string;
  name?: string;
  operate_auth?: number;
  platform_id?: number;
  source?: number;
  source_account_id?: number;
  source_account_type?: number;
  store_type?: number;
}

