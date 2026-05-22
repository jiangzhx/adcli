// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaProductCreateV2ProductInfoSpuSource, DpaProductCreateV2RequestProductInfoBrandInfo, DpaProductCreateV2RequestProductInfoGeo, DpaProductCreateV2RequestProductInfoGeoTarget, DpaProductCreateV2RequestProductInfoLandingInfo, DpaProductCreateV2RequestProductInfoPriceInfo, DpaProductCreateV2RequestProductInfoShopKeeperInfo, DpaProductCreateV2RequestProductInfoVideosInner } from "../models";

export interface DpaProductCreateV2RequestProductInfo {
  age?: number[];
  bought?: number;
  brand_info?: DpaProductCreateV2RequestProductInfoBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  geo?: DpaProductCreateV2RequestProductInfoGeo;
  geo_target?: DpaProductCreateV2RequestProductInfoGeoTarget;
  image_url: string;
  image_urls?: string[];
  label?: string[];
  landing_info?: DpaProductCreateV2RequestProductInfoLandingInfo;
  mark?: number;
  name: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  price_info?: DpaProductCreateV2RequestProductInfoPriceInfo;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaProductCreateV2RequestProductInfoShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaProductCreateV2ProductInfoSpuSource;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaProductCreateV2RequestProductInfoVideosInner[];
}

