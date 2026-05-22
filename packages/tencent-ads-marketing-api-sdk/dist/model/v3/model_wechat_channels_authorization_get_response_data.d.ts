import type { AuthListStruct, Conf } from "../v3/index";
export interface WechatChannelsAuthorizationGetResponseData {
    list?: AuthListStruct[];
    page_info?: Conf;
}
