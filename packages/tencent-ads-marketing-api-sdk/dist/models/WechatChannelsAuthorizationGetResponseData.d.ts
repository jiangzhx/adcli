import type { AuthListStruct, Conf } from "../models";
export interface WechatChannelsAuthorizationGetResponseData {
    list?: AuthListStruct[];
    page_info?: Conf;
}
