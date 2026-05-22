// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_dynamic_creative_previews_add_request.go
// Do not edit manually.

import type { PreviewCreativeComponents } from "../v3/index";

export interface DynamicCreativePreviewsAddRequest {
  account_id?: number | string;
  dynamic_creative_id?: number | string;
  preview_creative_components?: PreviewCreativeComponents;
  user_id_list?: string[];
}

