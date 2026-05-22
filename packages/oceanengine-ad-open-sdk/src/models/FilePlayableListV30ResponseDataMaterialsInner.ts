// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FilePlayableListV30DataMaterialsAuditStatus, FilePlayableListV30DataMaterialsImageMode, FilePlayableListV30DataMaterialsStatus } from "../models";

export interface FilePlayableListV30ResponseDataMaterialsInner {
  app_id?: string;
  app_material_id?: number;
  app_play_uri?: string;
  audit_reason?: string;
  audit_status?: FilePlayableListV30DataMaterialsAuditStatus;
  cover_url?: string;
  create_time?: string;
  image_mode?: FilePlayableListV30DataMaterialsImageMode;
  material_id?: number;
  qr_image_url?: string;
  signature?: string;
  status?: FilePlayableListV30DataMaterialsStatus;
  title?: string;
  version?: string;
}

