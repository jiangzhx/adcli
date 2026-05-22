// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaEbpClueProductGetV30DataProductsAuditStatus, DpaEbpClueProductGetV30DataProductsCompletionStatus, DpaEbpClueProductGetV30DataProductsStatus, DpaEbpClueProductGetV30ResponseDataProductsInnerBrandInfo, DpaEbpClueProductGetV30ResponseDataProductsInnerCategory, DpaEbpClueProductGetV30ResponseDataProductsInnerImagesUrlInner, DpaEbpClueProductGetV30ResponseDataProductsInnerLandingInfo, DpaEbpClueProductGetV30ResponseDataProductsInnerPriceInfo, DpaEbpClueProductGetV30ResponseDataProductsInnerShopKeeperInfo, DpaEbpClueProductGetV30ResponseDataProductsInnerVideosInner } from "../models";

export interface DpaEbpClueProductGetV30ResponseDataProductsInner {
  age?: number[];
  audit_status?: DpaEbpClueProductGetV30DataProductsAuditStatus;
  bought?: number;
  brand_info?: DpaEbpClueProductGetV30ResponseDataProductsInnerBrandInfo;
  category?: DpaEbpClueProductGetV30ResponseDataProductsInnerCategory;
  city?: string[];
  comments?: number;
  company_id?: number;
  completion_status?: DpaEbpClueProductGetV30DataProductsCompletionStatus;
  description?: string;
  feature?: string;
  has_video?: boolean;
  image_url?: string;
  images_url?: DpaEbpClueProductGetV30ResponseDataProductsInnerImagesUrlInner[];
  label?: string[];
  landing_info?: DpaEbpClueProductGetV30ResponseDataProductsInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: string;
  online_time?: string;
  outer_id?: string;
  poi_id?: string;
  price_info?: DpaEbpClueProductGetV30ResponseDataProductsInnerPriceInfo;
  product_id?: number;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaEbpClueProductGetV30ResponseDataProductsInnerShopKeeperInfo;
  spu_id?: string;
  status?: DpaEbpClueProductGetV30DataProductsStatus;
  tags?: string[];
  title?: string;
  video_url?: string;
  videos?: DpaEbpClueProductGetV30ResponseDataProductsInnerVideosInner[];
}

