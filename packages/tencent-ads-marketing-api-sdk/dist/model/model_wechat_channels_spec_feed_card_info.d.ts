import type { WechatChannelsSpecFeedCardInfoContestInfo, WechatChannelsSpecFreeTradeAdInfo } from "../model/index";
export interface WechatChannelsSpecFeedCardInfo {
    icon_url?: string;
    desc?: string;
    card_type?: number;
    dest_url?: string;
    free_trade_ad_info?: WechatChannelsSpecFreeTradeAdInfo;
    contest_info?: WechatChannelsSpecFeedCardInfoContestInfo;
}
