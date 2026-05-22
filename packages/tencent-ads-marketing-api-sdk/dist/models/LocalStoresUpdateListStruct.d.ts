import type { ImageSetDataStruct, LocalStoreBizInfoStructRsp, LocalStoreLocation, RecommendWordStruct, WechatEcosystemAccounts } from "../models";
export interface LocalStoresUpdateListStruct {
    poi_id?: string;
    local_store_name?: string;
    local_store_province?: string;
    local_store_city?: string;
    local_store_address?: string;
    local_store_biz_info?: LocalStoreBizInfoStructRsp;
    wechat_ecosystem_accounts?: WechatEcosystemAccounts;
    local_store_street?: string;
    local_store_business_area?: string;
    local_store_district?: string;
    local_store_location?: LocalStoreLocation;
    wechat_work_corp_id?: number | string;
    wechat_customer_service_link?: string;
    image_set?: ImageSetDataStruct[];
    recommend_words?: RecommendWordStruct[];
    is_use_standardized_name?: boolean;
}
