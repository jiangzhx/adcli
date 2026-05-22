// Generated from tencentad/marketing-api-go-sdk pkg/model/model_local_stores_search_info_get_list_struct.go
// Do not edit manually.

import type { LocalStoreBizInfoStructRsp, WechatEcosystemAccounts } from "../model/index";

export interface LocalStoresSearchInfoGetListStruct {
  poi_id?: string;
  local_store_name?: string;
  local_store_province?: string;
  local_store_city?: string;
  local_store_address?: string;
  local_store_biz_info?: LocalStoreBizInfoStructRsp;
  wechat_ecosystem_accounts?: WechatEcosystemAccounts;
}

