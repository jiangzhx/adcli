// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_update_local_store_struct.go
// Do not edit manually.

import type { ImageSetDataStruct, LocalStoreBizInfoStruct, RecommendWordStruct, WechatEcosystemAccounts } from "../v3/index";

export interface UpdateLocalStoreStruct {
  poi_id?: string;
  local_store_biz_info?: LocalStoreBizInfoStruct;
  wechat_ecosystem_accounts?: WechatEcosystemAccounts;
  wechat_work_corp_id?: number | string;
  wechat_customer_service_link?: string;
  image_set?: ImageSetDataStruct[];
  recommend_words?: RecommendWordStruct[];
  is_use_standardized_name?: boolean;
}

