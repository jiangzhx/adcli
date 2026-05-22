// Generated from oceanengine/ad_open_sdk_go models/model_dpa_product_update_v2_request_product_info.go
// Do not edit manually.

import type { DpaProductUpdateV2ProductInfoSpuSource, DpaProductUpdateV2ProductInfoStatus, DpaProductUpdateV2ProductInfoStock, DpaProductUpdateV2RequestProductInfoBrandInfo, DpaProductUpdateV2RequestProductInfoGeo, DpaProductUpdateV2RequestProductInfoGeoTarget, DpaProductUpdateV2RequestProductInfoLandingInfo, DpaProductUpdateV2RequestProductInfoPriceInfo, DpaProductUpdateV2RequestProductInfoShopKeeperInfo, DpaProductUpdateV2RequestProductInfoVideosInner } from "../models/index";

export interface DpaProductUpdateV2RequestProductInfo {
  age?: number[];
  bought?: number;
  brand_info?: DpaProductUpdateV2RequestProductInfoBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  geo?: DpaProductUpdateV2RequestProductInfoGeo;
  geo_target?: DpaProductUpdateV2RequestProductInfoGeoTarget;
  image_url: string;
  image_urls?: string[];
  label?: string[];
  landing_info?: DpaProductUpdateV2RequestProductInfoLandingInfo;
  mark?: number;
  name: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  price_info?: DpaProductUpdateV2RequestProductInfoPriceInfo;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaProductUpdateV2RequestProductInfoShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaProductUpdateV2ProductInfoSpuSource;
  status: DpaProductUpdateV2ProductInfoStatus;
  stock: DpaProductUpdateV2ProductInfoStock;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaProductUpdateV2RequestProductInfoVideosInner[];
}

