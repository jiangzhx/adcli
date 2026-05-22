// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaClueProductSaveV2ProductStatus, DpaClueProductSaveV2RequestProductBrandInfo, DpaClueProductSaveV2RequestProductImagesUrlInner, DpaClueProductSaveV2RequestProductLandingUrl, DpaClueProductSaveV2RequestProductPriceInfo, DpaClueProductSaveV2RequestProductShopKeeperInfo, DpaClueProductSaveV2RequestProductVideosInner } from "../models";

export interface DpaClueProductSaveV2RequestProduct {
  age?: number[];
  bought?: number;
  brand_info?: DpaClueProductSaveV2RequestProductBrandInfo;
  category_id: number | string;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  image_url?: string;
  images_url?: DpaClueProductSaveV2RequestProductImagesUrlInner[];
  label?: string[];
  landing_url?: DpaClueProductSaveV2RequestProductLandingUrl;
  mark?: number;
  name?: string;
  offline_time?: string;
  online_time?: string;
  outer_id?: string;
  poi_id?: string;
  price_info?: DpaClueProductSaveV2RequestProductPriceInfo;
  product_id?: number | string;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaClueProductSaveV2RequestProductShopKeeperInfo;
  spu_id?: string;
  status?: DpaClueProductSaveV2ProductStatus;
  tags?: string[];
  title?: string;
  video_url?: string;
  videos?: DpaClueProductSaveV2RequestProductVideosInner[];
}

