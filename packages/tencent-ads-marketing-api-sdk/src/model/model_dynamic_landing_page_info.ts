// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_landing_page_info.go
// Do not edit manually.

import type { ChannelsShopProductSpec, DestinationType, DoubleDeepLinkDataSpec, DynamicCreativePageSpec, LandingPageStructure, LinkPageSpec, LinkPageType, LinkUrlLinkNameType, ShareContentSpec, SimpleCanvasSubType, UnionMarketSpec } from "../model/index";

export interface DynamicLandingPageInfo {
  page_type?: DestinationType;
  page_spec?: DynamicCreativePageSpec;
  link_page_type?: LinkPageType;
  link_name_type?: LinkUrlLinkNameType;
  link_page_spec?: LinkPageSpec;
  qq_mini_game_tracking_query_string?: string;
  share_content_spec?: ShareContentSpec;
  webview_url?: string;
  simple_canvas_sub_type?: SimpleCanvasSubType;
  deep_link_url?: string;
  android_deep_link_app_id?: string;
  ios_deep_link_app_id?: string;
  double_deep_link_data?: DoubleDeepLinkDataSpec;
  universal_link_url?: string;
  union_market_switch?: boolean;
  union_market_spec?: UnionMarketSpec;
  link_name_text?: string;
  button_text_jump_info?: LandingPageStructure;
  channels_shop_product_spec?: ChannelsShopProductSpec;
}

