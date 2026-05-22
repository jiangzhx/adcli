// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpClueProductSaveV30ProductStatus, DpaEbpClueProductSaveV30RequestProductBrandInfo, DpaEbpClueProductSaveV30RequestProductImagesUrlInner, DpaEbpClueProductSaveV30RequestProductLandingUrl, DpaEbpClueProductSaveV30RequestProductPriceInfo, DpaEbpClueProductSaveV30RequestProductShopKeeperInfo, DpaEbpClueProductSaveV30RequestProductVideosInner } from "../models";

export interface DpaEbpClueProductSaveV30RequestProduct {
  age?: number[];
  bought?: number;
  brand_info?: DpaEbpClueProductSaveV30RequestProductBrandInfo;
  category_id: number;
  city?: string[];
  comments?: number;
  company_id: number;
  description?: string;
  feature?: string;
  image_url?: string;
  images_url?: DpaEbpClueProductSaveV30RequestProductImagesUrlInner[];
  label?: string[];
  landing_url?: DpaEbpClueProductSaveV30RequestProductLandingUrl;
  mark?: number;
  name?: string;
  offline_time?: string;
  online_time?: string;
  outer_id?: string;
  poi_id?: string;
  price_info?: DpaEbpClueProductSaveV30RequestProductPriceInfo;
  product_id?: number;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpClueProductSaveV30RequestProductShopKeeperInfo;
  spu_id?: string;
  status?: DpaEbpClueProductSaveV30ProductStatus;
  tags?: string[];
  title?: string;
  video_url?: string;
  videos?: DpaEbpClueProductSaveV30RequestProductVideosInner[];
}

