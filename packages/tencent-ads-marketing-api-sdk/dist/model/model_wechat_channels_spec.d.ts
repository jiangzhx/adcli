import type { RewardquestWechatChannelsSpecFreeTradeAdInfo, WechatChannelsSpecFeedPageConfItem, WechatChannelsSpecFinderLiveAdItem, WechatChannelsSpecFreeTradeAdInfo } from "../model/index";
export interface WechatChannelsSpec {
    id?: string;
    nonce_id?: string;
    username?: string;
    live_id?: string;
    live_title?: string;
    live_notice_id?: string;
    nick_name?: string;
    live_ad_item?: WechatChannelsSpecFinderLiveAdItem;
    feed_page_conf?: WechatChannelsSpecFeedPageConfItem[];
    live_recycle_flag?: number;
    free_trade_ad_info?: WechatChannelsSpecFreeTradeAdInfo;
    rewardquest_free_trade_ad_info?: RewardquestWechatChannelsSpecFreeTradeAdInfo;
    export_id_hash_value?: number;
    head_img_url?: string;
}
