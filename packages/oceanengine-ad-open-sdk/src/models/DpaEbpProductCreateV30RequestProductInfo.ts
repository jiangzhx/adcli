// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpProductCreateV30ProductInfoSpuSource, DpaEbpProductCreateV30RequestProductInfoBrandInfo, DpaEbpProductCreateV30RequestProductInfoGeo, DpaEbpProductCreateV30RequestProductInfoGeoTarget, DpaEbpProductCreateV30RequestProductInfoLandingInfo, DpaEbpProductCreateV30RequestProductInfoPriceInfo, DpaEbpProductCreateV30RequestProductInfoShopKeeperInfo, DpaEbpProductCreateV30RequestProductInfoVideosInner } from "../models";

export interface DpaEbpProductCreateV30RequestProductInfo {
  age?: number[];
  bought?: number;
  brand_info?: DpaEbpProductCreateV30RequestProductInfoBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  geo?: DpaEbpProductCreateV30RequestProductInfoGeo;
  geo_target?: DpaEbpProductCreateV30RequestProductInfoGeoTarget;
  image_url: string;
  image_urls?: string[];
  label?: string[];
  landing_info?: DpaEbpProductCreateV30RequestProductInfoLandingInfo;
  mark?: number;
  name: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  price_info?: DpaEbpProductCreateV30RequestProductInfoPriceInfo;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpProductCreateV30RequestProductInfoShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaEbpProductCreateV30ProductInfoSpuSource;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaEbpProductCreateV30RequestProductInfoVideosInner[];
}

