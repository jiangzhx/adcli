import type { LocalStoreBizInfoStructRsp, WechatEcosystemAccounts } from "../v3/index";
export interface LocalStoresSearchInfoGetListStruct {
    poi_id?: string;
    local_store_name?: string;
    local_store_province?: string;
    local_store_city?: string;
    local_store_address?: string;
    local_store_biz_info?: LocalStoreBizInfoStructRsp;
    wechat_ecosystem_accounts?: WechatEcosystemAccounts;
}
