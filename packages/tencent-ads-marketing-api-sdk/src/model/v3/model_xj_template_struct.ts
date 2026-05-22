// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_xj_template_struct.go
// Do not edit manually.

import type { XjPlayableType } from "../v3/index";

export interface XjTemplateStruct {
  page_template_id?: string;
  template_owner_id?: number | string;
  page_template_name?: string;
  page_template_cover_url?: string;
  playable_type?: XjPlayableType;
  labels?: string[];
  is_complex?: boolean;
}

