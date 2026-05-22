// Generated from tencentad/marketing-api-go-sdk pkg/model/model_outer_clues_add_request.go
// Do not edit manually.

import type { CustomizedTagsStruct, LeadsImportInfoStruct, LeadsMatchType } from "../model/index";

export interface OuterCluesAddRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_info_list?: LeadsImportInfoStruct[];
  customized_tags?: CustomizedTagsStruct[];
}

