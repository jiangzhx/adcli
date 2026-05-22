import type { Conf, ShopAuthListStruct } from "../models";
export interface WechatShopAuthorizationGetResponseData {
    list?: ShopAuthListStruct[];
    page_info?: Conf;
}
