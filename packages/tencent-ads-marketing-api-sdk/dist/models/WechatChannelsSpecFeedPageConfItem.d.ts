import type { ChannelsShopProductSpec, WechatChannelsSpecFeedCardInfo, WechatChannelsSpecFeedConfMiniGameData, WechatChannelsSpecFeedConfMiniProgramData } from "../models";
export interface WechatChannelsSpecFeedPageConfItem {
    ad_type?: number;
    canvas_id?: number | string;
    canvas_type?: number;
    button_title?: string;
    feed_card_info?: WechatChannelsSpecFeedCardInfo;
    page_url?: string;
    mini_program_data?: WechatChannelsSpecFeedConfMiniProgramData;
    mini_game_data?: WechatChannelsSpecFeedConfMiniGameData;
    ios_app_id?: string;
    android_app_id?: string;
    is_full_screen_open_landing_page?: number;
    channels_shop_product_spec?: ChannelsShopProductSpec;
}
