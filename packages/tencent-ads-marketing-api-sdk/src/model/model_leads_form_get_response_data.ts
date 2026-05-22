// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_form_get_response_data.go
// Do not edit manually.

import type { ControlListItemDetailData, FormConfigDetailData } from "../model/index";

export interface LeadsFormGetResponseData {
  account_id?: number | string;
  component_id?: string;
  component_name?: string;
  created_time?: string;
  form_config?: FormConfigDetailData;
  item_list?: ControlListItemDetailData[];
}

