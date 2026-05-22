// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_ad_images_add_request.go
// Do not edit manually.

import type { AdNum, DynamicAdTemplateSize } from "../model/index";

export interface DynamicAdImagesAddRequest {
  account_id?: number | string;
  product_catalog_id?: number | string;
  product_mode?: AdNum;
  product_source?: string;
  dynamic_ad_template_size?: DynamicAdTemplateSize;
  dynamic_ad_template_id?: number | string;
  image_matting_enabled?: boolean;
}

