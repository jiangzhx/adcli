// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileVideoMaterialClearTaskResultGetV2DataClearResultClearMaterialTypes, FileVideoMaterialClearTaskResultGetV2DataClearResultClearResult } from "../models";

export interface FileVideoMaterialClearTaskResultGetV2ResponseDataClearResultInner {
  clear_material_types?: FileVideoMaterialClearTaskResultGetV2DataClearResultClearMaterialTypes[];
  clear_result?: FileVideoMaterialClearTaskResultGetV2DataClearResultClearResult;
  creative_fail_count?: number;
  creative_success_count?: number;
  material_id?: number;
  promotion_fail_count?: number;
  promotion_success_count?: number;
}

