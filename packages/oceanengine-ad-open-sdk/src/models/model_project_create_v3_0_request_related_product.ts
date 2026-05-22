// Generated from oceanengine/ad_open_sdk_go models/model_project_create_v3_0_request_related_product.go
// Do not edit manually.

import type { ProjectCreateV30RelatedProductProductSetting, ProjectCreateV30RequestRelatedProductProductsInner } from "../models/index";

export interface ProjectCreateV30RequestRelatedProduct {
  product_id?: string;
  product_platform_id?: number | string;
  product_setting?: ProjectCreateV30RelatedProductProductSetting;
  products?: ProjectCreateV30RequestRelatedProductProductsInner[];
  unique_product_id?: number | string;
}

