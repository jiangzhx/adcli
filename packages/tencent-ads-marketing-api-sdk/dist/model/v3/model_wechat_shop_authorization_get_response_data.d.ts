import type { Conf, ShopAuthListStruct } from "../v3/index";
export interface WechatShopAuthorizationGetResponseData {
    list?: ShopAuthListStruct[];
    page_info?: Conf;
}
