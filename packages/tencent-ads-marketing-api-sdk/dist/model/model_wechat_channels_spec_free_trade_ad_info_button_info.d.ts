import type { WechatChannelsSpecFreeTradeAdInfoButtonInfoWeappInfo } from "../model/index";
export interface WechatChannelsSpecFreeTradeAdInfoButtonInfo {
    text?: string;
    dest_type?: number;
    dest_url?: string;
    page_type?: number;
    page_id?: number | string;
    weapp_info?: WechatChannelsSpecFreeTradeAdInfoButtonInfoWeappInfo;
    from_page_id?: number | string;
}
