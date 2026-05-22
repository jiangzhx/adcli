// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ProductMode, TemplateImageFillType } from "../models";

export interface DynamicAdImageTemplatesGetListStruct {
  dynamic_ad_template_id?: number | string;
  dynamic_ad_template_name?: string;
  product_item_display_quantity?: ProductMode;
  dynamic_ad_template_width?: number;
  dynamic_ad_template_height?: number;
  image_url?: string;
  image_product_fields?: string[];
  fill_type?: TemplateImageFillType;
  coverage?: number;
}

