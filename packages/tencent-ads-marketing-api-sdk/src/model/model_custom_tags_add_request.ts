// Generated from tencentad/marketing-api-go-sdk pkg/model/model_custom_tags_add_request.go
// Do not edit manually.

import type { DataPlatform } from "../model/index";

export interface CustomTagsAddRequest {
  account_id?: number | string;
  parent_tag_id?: number | string;
  name?: string;
  description?: string;
  tag_code?: string;
  platform?: DataPlatform;
}

