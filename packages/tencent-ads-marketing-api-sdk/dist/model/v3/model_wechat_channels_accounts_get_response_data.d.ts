import type { Conf, WechatChannelsAccountStruct } from "../v3/index";
export interface WechatChannelsAccountsGetResponseData {
    list?: WechatChannelsAccountStruct[];
    page_info?: Conf;
}
