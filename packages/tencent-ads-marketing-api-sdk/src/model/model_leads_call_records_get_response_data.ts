// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_call_records_get_response_data.go
// Do not edit manually.

import type { CallListStruct, LeadsWebPageInfoStruct } from "../model/index";

export interface LeadsCallRecordsGetResponseData {
  page_info?: LeadsWebPageInfoStruct;
  request_id?: string;
  entities?: CallListStruct[];
}

