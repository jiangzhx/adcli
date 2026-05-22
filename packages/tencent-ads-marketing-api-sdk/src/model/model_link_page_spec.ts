// Generated from tencentad/marketing-api-go-sdk pkg/model/model_link_page_spec.go
// Do not edit manually.

import type { AdcreativeMiniProgramSpec, ChannelsShopProductSpec, LinkMiniGameSpec } from "../model/index";

export interface LinkPageSpec {
  page_id?: number | string;
  page_url?: string;
  mini_program_spec?: AdcreativeMiniProgramSpec;
  mini_game_spec?: LinkMiniGameSpec;
  channels_shop_product_spec?: ChannelsShopProductSpec;
}

