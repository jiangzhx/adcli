// Generated from github.com/bububa/kwai-marketing-api/model/tool/operation_record.go
// Do not edit manually.

import type { ContentLog } from "./content_log";

export interface OperationRecord {
  object_id?: string;
  operation_type?: number;
  operation_target?: number;
  role_type?: number;
  object_name?: string;
  operation_time?: string;
  content_log?: ContentLog[];
}
