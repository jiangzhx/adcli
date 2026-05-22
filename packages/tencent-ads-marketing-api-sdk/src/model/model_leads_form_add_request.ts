// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_form_add_request.go
// Do not edit manually.

import type { CreateControlListItem } from "../model/index";

export interface LeadsFormAddRequest {
  account_id?: number | string;
  component_name?: string;
  title?: string;
  sub_title?: string;
  submit_text?: string;
  items?: CreateControlListItem[];
}

