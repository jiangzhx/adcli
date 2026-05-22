import type { AdcreativeMiniProgramSpec, ChannelsShopProductSpec, LinkMiniGameSpec } from "../models";
export interface LinkPageSpec {
    page_id?: number | string;
    page_url?: string;
    mini_program_spec?: AdcreativeMiniProgramSpec;
    mini_game_spec?: LinkMiniGameSpec;
    channels_shop_product_spec?: ChannelsShopProductSpec;
}
