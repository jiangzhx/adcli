import type { Conf, WechatPagesGetListStruct } from "../models";
export interface WechatPagesGetResponseData {
    list?: WechatPagesGetListStruct[];
    page_info?: Conf;
}
