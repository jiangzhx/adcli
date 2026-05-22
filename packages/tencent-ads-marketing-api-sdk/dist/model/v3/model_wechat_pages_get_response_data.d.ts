import type { Conf, WechatPagesGetListStruct } from "../v3/index";
export interface WechatPagesGetResponseData {
    list?: WechatPagesGetListStruct[];
    page_info?: Conf;
}
