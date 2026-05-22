// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { NativeAnchorCreateV30AnchorInfoShoppingCartAnchorLinkType, NativeAnchorCreateV30RequestAnchorInfoShoppingCartAnchorProductImagesInner } from "../models";

export interface NativeAnchorCreateV30RequestAnchorInfoShoppingCartAnchor {
  external_url?: string;
  link_type?: NativeAnchorCreateV30AnchorInfoShoppingCartAnchorLinkType;
  open_url?: string;
  product_images?: NativeAnchorCreateV30RequestAnchorInfoShoppingCartAnchorProductImagesInner[];
  product_price?: number;
  product_source?: string;
  product_title?: string;
  title?: string;
}

