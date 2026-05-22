// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_material_ai_annotation_add_request.go
// Do not edit manually.

import type { Annotation } from "../v3/index";

export interface MaterialAiAnnotationAddRequest {
  account_id?: number | string;
  organization_id?: number | string;
  annotation_list?: Annotation[];
  resource_type?: string;
}

