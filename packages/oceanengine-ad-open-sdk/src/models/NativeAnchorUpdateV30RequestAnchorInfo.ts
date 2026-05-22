// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorUpdateV30AnchorInfoAnchorType, NativeAnchorUpdateV30RequestAnchorInfoAppEcommerceAnchor, NativeAnchorUpdateV30RequestAnchorInfoGameAnchor, NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchor, NativeAnchorUpdateV30RequestAnchorInfoPrivateChat, NativeAnchorUpdateV30RequestAnchorInfoShoppingCartAnchor } from "../models";

export interface NativeAnchorUpdateV30RequestAnchorInfo {
  anchor_id: string;
  anchor_type: NativeAnchorUpdateV30AnchorInfoAnchorType;
  app_ecommerce_anchor?: NativeAnchorUpdateV30RequestAnchorInfoAppEcommerceAnchor;
  game_anchor?: NativeAnchorUpdateV30RequestAnchorInfoGameAnchor;
  net_service_anchor?: NativeAnchorUpdateV30RequestAnchorInfoNetServiceAnchor;
  private_chat?: NativeAnchorUpdateV30RequestAnchorInfoPrivateChat;
  shopping_cart_anchor?: NativeAnchorUpdateV30RequestAnchorInfoShoppingCartAnchor;
  tool_title: string;
}

