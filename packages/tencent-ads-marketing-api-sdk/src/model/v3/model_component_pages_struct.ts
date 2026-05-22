// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_pages_struct.go
// Do not edit manually.

import type { ComponentSpecStruct, TemplatesPageType } from "../v3/index";

export interface ComponentPagesStruct {
  page_type?: TemplatesPageType;
  page_name?: string;
  page_title?: string;
  clipboard?: string;
  page_deeplink?: string;
  mobile_app_id?: string;
  form_id?: string;
  page_template_id?: string;
  component_spec_list?: ComponentSpecStruct[];
}

