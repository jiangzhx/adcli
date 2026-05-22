// Generated from tencentad/marketing-api-go-sdk pkg/model/model_data_file.go
// Do not edit manually.

import type { OperationType, UserIdType } from "../model/index";

export interface DataFile {
  audience_id?: number | string;
  custom_audience_file_id?: number | string;
  name?: string;
  user_id_type?: UserIdType;
  operation_type?: OperationType;
  open_app_id?: string;
  salt_id?: string;
  process_status?: number;
  process_code?: number;
  error_message?: string;
  line_count?: number;
  valid_line_count?: number;
  user_count?: number;
  size?: number;
  created_time?: string;
}

