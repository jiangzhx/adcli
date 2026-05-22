// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_dynamic_ad_images_add_request.go
// Do not edit manually.

import type { DynamicAdTemplateSize, ProductMode } from "../v3/index";

export interface DynamicAdImagesAddRequest {
  account_id?: number | string;
  product_catalog_id?: number | string;
  product_mode?: ProductMode;
  product_source?: string;
  dynamic_ad_template_size?: DynamicAdTemplateSize;
  dynamic_ad_template_id?: number | string;
  image_matting_enabled?: boolean;
}

