// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FilePreauditGetV30FilteringMaterialChannel, FilePreauditGetV30FilteringMaterialType, FilePreauditGetV30FilteringStatus } from "../models";

export interface FilePreauditGetV30Filtering {
  material_channel?: FilePreauditGetV30FilteringMaterialChannel;
  material_type?: FilePreauditGetV30FilteringMaterialType;
  preaudit_ids?: number | string[];
  status?: FilePreauditGetV30FilteringStatus;
}

