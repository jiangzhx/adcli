// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaEbpClueProductListV30ResponseDataProductsInnerBrandInfo, DpaEbpClueProductListV30ResponseDataProductsInnerCategory, DpaEbpClueProductListV30ResponseDataProductsInnerDelivery, DpaEbpClueProductListV30ResponseDataProductsInnerImagesUrlInner, DpaEbpClueProductListV30ResponseDataProductsInnerLandingInfo, DpaEbpClueProductListV30ResponseDataProductsInnerPriceInfo, DpaEbpClueProductListV30ResponseDataProductsInnerProductHisEval, DpaEbpClueProductListV30ResponseDataProductsInnerShopKeeperInfo, DpaEbpClueProductListV30ResponseDataProductsInnerVideosInner } from "../models";

export interface DpaEbpClueProductListV30ResponseDataProductsInner {
  account_id: number;
  account_type: number;
  audit_status?: number;
  brand_id?: string;
  brand_info?: DpaEbpClueProductListV30ResponseDataProductsInnerBrandInfo;
  category?: DpaEbpClueProductListV30ResponseDataProductsInnerCategory;
  category_id: number;
  company_id?: number;
  completion_status?: number;
  create_time?: string;
  delivery?: DpaEbpClueProductListV30ResponseDataProductsInnerDelivery;
  description?: string;
  dpa_id?: number;
  ext?: string;
  feature?: string;
  has_video?: number;
  history_account_id?: number;
  history_account_type?: number;
  hot_word?: Record<string, string[]>;
  image_url?: string;
  images_url?: DpaEbpClueProductListV30ResponseDataProductsInnerImagesUrlInner[];
  label?: string[];
  landing_info?: DpaEbpClueProductListV30ResponseDataProductsInnerLandingInfo;
  modify_time?: string;
  name?: string;
  offline_time?: number;
  online_status?: number;
  online_time?: number;
  outer_id?: string;
  platform_product_id?: number;
  poi_id?: string;
  price_info?: DpaEbpClueProductListV30ResponseDataProductsInnerPriceInfo;
  product_his_eval?: DpaEbpClueProductListV30ResponseDataProductsInnerProductHisEval;
  product_id?: number;
  profession?: Record<string, string>;
  reason?: string;
  shop_keeper_info?: DpaEbpClueProductListV30ResponseDataProductsInnerShopKeeperInfo;
  source_account_id?: number;
  source_account_type?: number;
  spu_id?: string;
  status?: number;
  stock?: number;
  tags?: string[];
  title?: string;
  type?: number;
  version?: number;
  video_url?: string;
  videos?: DpaEbpClueProductListV30ResponseDataProductsInnerVideosInner[];
}

