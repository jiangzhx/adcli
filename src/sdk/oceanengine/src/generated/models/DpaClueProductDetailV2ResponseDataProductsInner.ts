// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DpaClueProductDetailV2DataProductsAuditStatus, DpaClueProductDetailV2DataProductsCompletionStatus, DpaClueProductDetailV2DataProductsStatus, DpaClueProductDetailV2ResponseDataProductsInnerBrandInfo, DpaClueProductDetailV2ResponseDataProductsInnerCategory, DpaClueProductDetailV2ResponseDataProductsInnerImagesUrlInner, DpaClueProductDetailV2ResponseDataProductsInnerLandingInfo, DpaClueProductDetailV2ResponseDataProductsInnerPriceInfo, DpaClueProductDetailV2ResponseDataProductsInnerShopKeeperInfo, DpaClueProductDetailV2ResponseDataProductsInnerVideosInner } from "../models";

export interface DpaClueProductDetailV2ResponseDataProductsInner {
  age?: number[];
  audit_status?: DpaClueProductDetailV2DataProductsAuditStatus;
  bought?: number;
  brand_info?: DpaClueProductDetailV2ResponseDataProductsInnerBrandInfo;
  category?: DpaClueProductDetailV2ResponseDataProductsInnerCategory;
  city?: string[];
  comments?: number;
  completion_status?: DpaClueProductDetailV2DataProductsCompletionStatus;
  description?: string;
  feature?: string;
  has_video?: boolean;
  image_url?: string;
  images_url?: DpaClueProductDetailV2ResponseDataProductsInnerImagesUrlInner[];
  label?: string[];
  landing_info?: DpaClueProductDetailV2ResponseDataProductsInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: string;
  online_time?: string;
  outer_id?: string;
  poi_id?: string;
  price_info?: DpaClueProductDetailV2ResponseDataProductsInnerPriceInfo;
  product_id?: number;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaClueProductDetailV2ResponseDataProductsInnerShopKeeperInfo;
  spu_id?: string;
  status?: DpaClueProductDetailV2DataProductsStatus;
  tags?: string[];
  title?: string;
  video_url?: string;
  videos?: DpaClueProductDetailV2ResponseDataProductsInnerVideosInner[];
}

