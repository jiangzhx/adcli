import type { AdcreativeMiniProgramSpec, ChannelsShopProductSpec, DynamicProductSpec, LandingPageWechatOfficialAccountSpec, MiniGameSpec, OverrideCanvasHeadOption, SearchBrandAreaSpec, WechatChannelsSpec, WechatShopSpec } from "../model/index";
export interface PageSpec {
    page_id?: number | string;
    page_url?: string;
    mini_program_spec?: AdcreativeMiniProgramSpec;
    mini_game_spec?: MiniGameSpec;
    wechat_channels_spec?: WechatChannelsSpec;
    override_canvas_head_option?: OverrideCanvasHeadOption;
    dynamic_product_spec?: DynamicProductSpec;
    wechat_official_account_spec?: LandingPageWechatOfficialAccountSpec;
    search_brand_area_spec?: SearchBrandAreaSpec;
    channels_shop_product_spec?: ChannelsShopProductSpec;
    wechat_shop_spec?: WechatShopSpec;
}
