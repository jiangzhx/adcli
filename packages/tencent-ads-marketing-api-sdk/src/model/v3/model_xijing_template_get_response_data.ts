// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_xijing_template_get_response_data.go
// Do not edit manually.

import type { ComponentSpecStruct, TemplatesPageType } from "../v3/index";

export interface XijingTemplateGetResponseData {
  page_template_id?: string;
  page_type?: TemplatesPageType;
  page_name?: string;
  clipboard?: string;
  page_deeplink?: string;
  page_title?: string;
  component_spec_list?: ComponentSpecStruct[];
  mobile_app_id?: string;
}

