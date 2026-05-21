// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaEbpProductUpdateV30ProductInfoSpuSource, DpaEbpProductUpdateV30ProductInfoStatus, DpaEbpProductUpdateV30ProductInfoStock, DpaEbpProductUpdateV30RequestProductInfoBrandInfo, DpaEbpProductUpdateV30RequestProductInfoGeo, DpaEbpProductUpdateV30RequestProductInfoGeoTarget, DpaEbpProductUpdateV30RequestProductInfoLandingInfo, DpaEbpProductUpdateV30RequestProductInfoPriceInfo, DpaEbpProductUpdateV30RequestProductInfoShopKeeperInfo, DpaEbpProductUpdateV30RequestProductInfoVideosInner } from "../models";

export interface DpaEbpProductUpdateV30RequestProductInfo {
  age?: number[];
  bought?: number;
  brand_info?: DpaEbpProductUpdateV30RequestProductInfoBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  geo?: DpaEbpProductUpdateV30RequestProductInfoGeo;
  geo_target?: DpaEbpProductUpdateV30RequestProductInfoGeoTarget;
  image_url: string;
  image_urls?: string[];
  label?: string[];
  landing_info?: DpaEbpProductUpdateV30RequestProductInfoLandingInfo;
  mark?: number;
  name: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  price_info?: DpaEbpProductUpdateV30RequestProductInfoPriceInfo;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpProductUpdateV30RequestProductInfoShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaEbpProductUpdateV30ProductInfoSpuSource;
  status: DpaEbpProductUpdateV30ProductInfoStatus;
  stock: DpaEbpProductUpdateV30ProductInfoStock;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaEbpProductUpdateV30RequestProductInfoVideosInner[];
}

