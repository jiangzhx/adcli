// Generated from oceanengine/ad_open_sdk_go models/model_file_playable_list_v3_0_response_data_materials_inner.go
// Do not edit manually.

import type { FilePlayableListV30DataMaterialsAuditStatus, FilePlayableListV30DataMaterialsImageMode, FilePlayableListV30DataMaterialsStatus } from "../models/index";

export interface FilePlayableListV30ResponseDataMaterialsInner {
  app_id?: string;
  app_material_id?: number | string;
  app_play_uri?: string;
  audit_reason?: string;
  audit_status?: FilePlayableListV30DataMaterialsAuditStatus;
  cover_url?: string;
  create_time?: string;
  image_mode?: FilePlayableListV30DataMaterialsImageMode;
  material_id?: number | string;
  qr_image_url?: string;
  signature?: string;
  status?: FilePlayableListV30DataMaterialsStatus;
  title?: string;
  version?: string;
}

