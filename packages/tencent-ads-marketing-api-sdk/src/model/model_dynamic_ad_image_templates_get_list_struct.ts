// Generated from tencentad/marketing-api-go-sdk pkg/model/model_dynamic_ad_image_templates_get_list_struct.go
// Do not edit manually.

import type { AdNum, TemplateImageFillType } from "../model/index";

export interface DynamicAdImageTemplatesGetListStruct {
  dynamic_ad_template_id?: number | string;
  dynamic_ad_template_name?: string;
  product_item_display_quantity?: AdNum;
  dynamic_ad_template_width?: number;
  dynamic_ad_template_height?: number;
  image_url?: string;
  image_product_fields?: string[];
  fill_type?: TemplateImageFillType;
  coverage?: number;
}

