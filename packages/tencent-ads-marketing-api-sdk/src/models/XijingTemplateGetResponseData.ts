// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ComponentSpecStruct, TemplatesPageType } from "../models";

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

