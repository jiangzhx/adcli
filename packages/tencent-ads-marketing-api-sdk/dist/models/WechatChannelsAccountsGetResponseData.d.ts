import type { Conf, WechatChannelsAccountStruct } from "../models";
export interface WechatChannelsAccountsGetResponseData {
    list?: WechatChannelsAccountStruct[];
    page_info?: Conf;
}
