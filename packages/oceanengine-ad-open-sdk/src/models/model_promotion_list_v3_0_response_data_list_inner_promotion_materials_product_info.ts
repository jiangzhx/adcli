// Generated from oceanengine/ad_open_sdk_go models/model_promotion_list_v3_0_response_data_list_inner_promotion_materials_product_info.go
// Do not edit manually.

import type { PromotionListV30DataListPromotionMaterialsProductInfoProductImageType, PromotionListV30DataListPromotionMaterialsProductInfoProductNameType, PromotionListV30DataListPromotionMaterialsProductInfoProductSellingPointType } from "../models/index";

export interface PromotionListV30ResponseDataListInnerPromotionMaterialsProductInfo {
  echo_image_ids?: string[];
  echo_titles?: string[];
  image_ids?: string[];
  product_image_fields?: string[];
  product_image_type?: PromotionListV30DataListPromotionMaterialsProductInfoProductImageType;
  product_name_fields?: string[];
  product_name_type?: PromotionListV30DataListPromotionMaterialsProductInfoProductNameType;
  product_selling_point_fields?: string[];
  product_selling_point_type?: PromotionListV30DataListPromotionMaterialsProductInfoProductSellingPointType;
  selling_points?: string[];
  titles?: string[];
}

