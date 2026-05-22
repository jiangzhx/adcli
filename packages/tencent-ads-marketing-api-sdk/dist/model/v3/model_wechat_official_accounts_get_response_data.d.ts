import type { Conf, WechatOfficialAccountStruct } from "../v3/index";
export interface WechatOfficialAccountsGetResponseData {
    list?: WechatOfficialAccountStruct[];
    page_info?: Conf;
}
