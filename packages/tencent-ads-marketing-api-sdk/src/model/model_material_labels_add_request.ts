// Generated from tencentad/marketing-api-go-sdk pkg/model/model_material_labels_add_request.go
// Do not edit manually.

import type { CreateLabelStruct } from "../model/index";

export interface MaterialLabelsAddRequest {
  account_id?: number | string;
  image_id_list?: string[];
  media_id_list?: string[];
  labels?: CreateLabelStruct[];
}

