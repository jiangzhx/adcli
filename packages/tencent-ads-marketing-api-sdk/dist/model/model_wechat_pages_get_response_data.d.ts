import type { Conf, WechatPagesGetListStruct } from "../model/index";
export interface WechatPagesGetResponseData {
    list?: WechatPagesGetListStruct[];
    page_info?: Conf;
}
