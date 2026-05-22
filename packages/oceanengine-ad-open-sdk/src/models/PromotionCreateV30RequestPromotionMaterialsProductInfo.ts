// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionCreateV30PromotionMaterialsProductInfoProductImageType, PromotionCreateV30PromotionMaterialsProductInfoProductNameType, PromotionCreateV30PromotionMaterialsProductInfoProductSellingPointType } from "../models";

export interface PromotionCreateV30RequestPromotionMaterialsProductInfo {
  image_ids?: string[];
  product_image_fields?: string[];
  product_image_type?: PromotionCreateV30PromotionMaterialsProductInfoProductImageType;
  product_name_fields?: string[];
  product_name_type?: PromotionCreateV30PromotionMaterialsProductInfoProductNameType;
  product_selling_point_fields?: string[];
  product_selling_point_type?: PromotionCreateV30PromotionMaterialsProductInfoProductSellingPointType;
  selling_points?: string[];
  titles?: string[];
}

