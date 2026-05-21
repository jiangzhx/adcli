// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ProjectCreateV30RelatedProductProductSetting, ProjectCreateV30RequestRelatedProductProductsInner } from "../models";

export interface ProjectCreateV30RequestRelatedProduct {
  product_id?: string;
  product_platform_id?: number;
  product_setting?: ProjectCreateV30RelatedProductProductSetting;
  products?: ProjectCreateV30RequestRelatedProductProductsInner[];
  unique_product_id?: number;
}

