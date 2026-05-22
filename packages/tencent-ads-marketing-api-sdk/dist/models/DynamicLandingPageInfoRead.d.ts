import type { ChannelsShopProductSpec, DynamicCreativePageSpec, LandingPageStructure, LinkPageSpec, LinkPageType, LinkUrlLinkNameType, PageTypeRead, ShareContentSpec, SimpleCanvasSubType } from "../models";
export interface DynamicLandingPageInfoRead {
    page_type?: PageTypeRead;
    page_spec?: DynamicCreativePageSpec;
    link_page_type?: LinkPageType;
    link_name_type?: LinkUrlLinkNameType;
    link_page_spec?: LinkPageSpec;
    qq_mini_game_tracking_query_string?: string;
    share_content_spec?: ShareContentSpec;
    webview_url?: string;
    simple_canvas_sub_type?: SimpleCanvasSubType;
    link_name_text?: string;
    button_text_jump_info?: LandingPageStructure;
    channels_shop_product_spec?: ChannelsShopProductSpec;
}
