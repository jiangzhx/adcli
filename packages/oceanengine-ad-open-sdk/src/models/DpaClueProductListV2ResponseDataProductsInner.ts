// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaClueProductListV2DataProductsAuditStatus, DpaClueProductListV2DataProductsCompletionStatus, DpaClueProductListV2DataProductsStatus, DpaClueProductListV2ResponseDataProductsInnerBrandInfo, DpaClueProductListV2ResponseDataProductsInnerCategory, DpaClueProductListV2ResponseDataProductsInnerImagesUrlInner, DpaClueProductListV2ResponseDataProductsInnerLandingInfo, DpaClueProductListV2ResponseDataProductsInnerPriceInfo, DpaClueProductListV2ResponseDataProductsInnerShopKeeperInfo, DpaClueProductListV2ResponseDataProductsInnerVideosInner } from "../models";

export interface DpaClueProductListV2ResponseDataProductsInner {
  age?: number[];
  audit_status?: DpaClueProductListV2DataProductsAuditStatus;
  bought?: number;
  brand_info?: DpaClueProductListV2ResponseDataProductsInnerBrandInfo;
  category?: DpaClueProductListV2ResponseDataProductsInnerCategory;
  city?: string[];
  comments?: number;
  completion_status?: DpaClueProductListV2DataProductsCompletionStatus;
  description?: string;
  feature?: string;
  has_video?: boolean;
  image_url?: string;
  images_url?: DpaClueProductListV2ResponseDataProductsInnerImagesUrlInner[];
  label?: string[];
  landing_info?: DpaClueProductListV2ResponseDataProductsInnerLandingInfo;
  mark?: number;
  name?: string;
  offline_time?: string;
  online_time?: string;
  outer_id?: string;
  poi_id?: string;
  price_info?: DpaClueProductListV2ResponseDataProductsInnerPriceInfo;
  product_id?: number;
  profession?: Record<string, string>;
  province?: string[];
  shop_keeper_info?: DpaClueProductListV2ResponseDataProductsInnerShopKeeperInfo;
  spu_id?: string;
  status?: DpaClueProductListV2DataProductsStatus;
  tags?: string[];
  title?: string;
  video_url?: string;
  videos?: DpaClueProductListV2ResponseDataProductsInnerVideosInner[];
}

