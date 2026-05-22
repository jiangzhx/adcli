// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_detail_list_struct.go
// Do not edit manually.

import type { TaskDetailResultType } from "../v3/index";

export interface DetailListStruct {
  scope_object_id?: number | string;
  scope_object_name?: string;
  detail_result_type?: TaskDetailResultType;
  message?: string;
  account_id?: number | string;
  ext_data?: string;
  scope_object_id_str?: string;
  code?: number;
  organization_id?: number | string;
}

