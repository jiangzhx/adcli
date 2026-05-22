// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionAutoGenerateConfigGetV30DataTemplatesTemplateType, PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInnerTemplateImgSchemaInner, PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInnerTemplateTextSchemaInner } from "../models";

export interface PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInner {
  template_id: number;
  template_img_schema?: PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInnerTemplateImgSchemaInner[];
  template_text_schema?: PromotionAutoGenerateConfigGetV30ResponseDataTemplatesInnerTemplateTextSchemaInner[];
  template_type: PromotionAutoGenerateConfigGetV30DataTemplatesTemplateType;
}

