// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FilePlayableListV30FilteringAuditStatus, FilePlayableListV30FilteringStatus } from "../models";

export interface FilePlayableListV30Filtering {
  app_ids?: string[];
  app_material_ids?: number[];
  audit_status?: FilePlayableListV30FilteringAuditStatus;
  end_time?: string;
  keyword?: string;
  material_ids?: number[];
  signatures?: string[];
  start_time?: string;
  status?: FilePlayableListV30FilteringStatus;
}

