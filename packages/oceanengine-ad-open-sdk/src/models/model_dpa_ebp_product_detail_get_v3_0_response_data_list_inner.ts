// Generated from oceanengine/ad_open_sdk_go models/model_dpa_ebp_product_detail_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { DpaEbpProductDetailGetV30DataListSpuSource, DpaEbpProductDetailGetV30ResponseDataListInnerBrandInfo, DpaEbpProductDetailGetV30ResponseDataListInnerImageUrlsInner, DpaEbpProductDetailGetV30ResponseDataListInnerLandingInfo, DpaEbpProductDetailGetV30ResponseDataListInnerPriceInfo, DpaEbpProductDetailGetV30ResponseDataListInnerShopKeeperInfo, DpaEbpProductDetailGetV30ResponseDataListInnerVideosInner } from "../models/index";

export interface DpaEbpProductDetailGetV30ResponseDataListInner {
  age?: number[];
  audit_hit_field?: string;
  audit_reason_text?: string;
  audit_status?: number;
  bought?: number;
  brand_info?: DpaEbpProductDetailGetV30ResponseDataListInnerBrandInfo;
  city?: string[];
  comments?: number;
  description?: string;
  feature?: string;
  first_category?: string;
  first_category_id?: string;
  has_video?: number;
  image_url?: string;
  image_urls?: DpaEbpProductDetailGetV30ResponseDataListInnerImageUrlsInner[];
  label?: string[];
  landing_info?: DpaEbpProductDetailGetV30ResponseDataListInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: number;
  online_time?: number;
  outer_id?: string;
  platform_id?: number | string;
  price_info?: DpaEbpProductDetailGetV30ResponseDataListInnerPriceInfo;
  product_id?: number | string;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpProductDetailGetV30ResponseDataListInnerShopKeeperInfo;
  spu_id?: string;
  spu_source?: DpaEbpProductDetailGetV30DataListSpuSource;
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
  videos?: DpaEbpProductDetailGetV30ResponseDataListInnerVideosInner[];
}

