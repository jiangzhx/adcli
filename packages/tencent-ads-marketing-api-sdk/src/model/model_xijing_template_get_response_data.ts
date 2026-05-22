// Generated from tencentad/marketing-api-go-sdk pkg/model/model_xijing_template_get_response_data.go
// Do not edit manually.

import type { TemplatesPageType } from "../model/index";

export interface XijingTemplateGetResponseData {
  page_template_id?: string;
  page_type?: TemplatesPageType;
  page_name?: string;
  clipboard?: string;
  page_deeplink?: string;
  page_title?: string;
  component_spec_list?: string[];
  mobile_app_id?: string;
}

