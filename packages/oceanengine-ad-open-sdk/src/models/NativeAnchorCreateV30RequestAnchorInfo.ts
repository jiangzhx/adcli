// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorCreateV30AnchorInfoAnchorType, NativeAnchorCreateV30RequestAnchorInfoAppEcommerceAnchor, NativeAnchorCreateV30RequestAnchorInfoGameAnchor, NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchor, NativeAnchorCreateV30RequestAnchorInfoPrivateChat, NativeAnchorCreateV30RequestAnchorInfoShoppingCartAnchor } from "../models";

export interface NativeAnchorCreateV30RequestAnchorInfo {
  anchor_type?: NativeAnchorCreateV30AnchorInfoAnchorType;
  app_ecommerce_anchor?: NativeAnchorCreateV30RequestAnchorInfoAppEcommerceAnchor;
  game_anchor?: NativeAnchorCreateV30RequestAnchorInfoGameAnchor;
  net_service_anchor?: NativeAnchorCreateV30RequestAnchorInfoNetServiceAnchor;
  private_chat?: NativeAnchorCreateV30RequestAnchorInfoPrivateChat;
  shopping_cart_anchor?: NativeAnchorCreateV30RequestAnchorInfoShoppingCartAnchor;
  tool_title?: string;
}

