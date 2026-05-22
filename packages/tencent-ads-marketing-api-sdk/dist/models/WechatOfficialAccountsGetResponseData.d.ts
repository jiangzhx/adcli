import type { Conf, WechatOfficialAccountStruct } from "../models";
export interface WechatOfficialAccountsGetResponseData {
    list?: WechatOfficialAccountStruct[];
    page_info?: Conf;
}
