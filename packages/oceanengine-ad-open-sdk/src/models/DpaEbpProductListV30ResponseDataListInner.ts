// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpProductListV30DataListSpuSource, DpaEbpProductListV30ResponseDataListInnerBrandInfo, DpaEbpProductListV30ResponseDataListInnerImageUrlsInner, DpaEbpProductListV30ResponseDataListInnerLandingInfo, DpaEbpProductListV30ResponseDataListInnerPriceInfo, DpaEbpProductListV30ResponseDataListInnerShopKeeperInfo, DpaEbpProductListV30ResponseDataListInnerVideosInner } from "../models";

export interface DpaEbpProductListV30ResponseDataListInner {
  age?: number[];
  audit_hit_field?: string;
  audit_reason_text?: string;
  audit_status?: number;
  bought?: number;
  brand_info?: DpaEbpProductListV30ResponseDataListInnerBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  has_video?: number;
  image_url?: string;
  image_urls?: DpaEbpProductListV30ResponseDataListInnerImageUrlsInner[];
  label?: string[];
  landing_info?: DpaEbpProductListV30ResponseDataListInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  platform_id?: number | string;
  price_info?: DpaEbpProductListV30ResponseDataListInnerPriceInfo;
  product_id?: number | string;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpProductListV30ResponseDataListInnerShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaEbpProductListV30DataListSpuSource;
  status?: number;
  stock?: number;
  sub_category?: string;
  sub_category_id?: string;
  tags?: string[];
  third_category?: string;
  third_category_id?: string;
  title?: string;
  titles?: string[];
  video?: string;
  videos?: DpaEbpProductListV30ResponseDataListInnerVideosInner[];
}

