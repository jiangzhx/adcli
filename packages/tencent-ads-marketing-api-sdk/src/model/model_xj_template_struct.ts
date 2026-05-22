// Generated from tencentad/marketing-api-go-sdk pkg/model/model_xj_template_struct.go
// Do not edit manually.

import type { PlayableType } from "../model/index";

export interface XjTemplateStruct {
  page_template_id?: string;
  template_owner_id?: number | string;
  page_template_name?: string;
  page_template_cover_url?: string;
  playable_type?: PlayableType;
  labels?: string[];
  is_complex?: boolean;
}

