// Generated from oceanengine/ad_open_sdk_go models/model_promotion_update_v3_0_request_promotion_materials_product_info.go
// Do not edit manually.

import type { PromotionUpdateV30PromotionMaterialsProductInfoProductImageType, PromotionUpdateV30PromotionMaterialsProductInfoProductNameType, PromotionUpdateV30PromotionMaterialsProductInfoProductSellingPointType } from "../models/index";

export interface PromotionUpdateV30RequestPromotionMaterialsProductInfo {
  image_ids?: string[];
  product_image_fields?: string[];
  product_image_type?: PromotionUpdateV30PromotionMaterialsProductInfoProductImageType;
  product_name_fields?: string[];
  product_name_type?: PromotionUpdateV30PromotionMaterialsProductInfoProductNameType;
  product_selling_point_fields?: string[];
  product_selling_point_type?: PromotionUpdateV30PromotionMaterialsProductInfoProductSellingPointType;
  selling_points?: string[];
  titles?: string[];
}

