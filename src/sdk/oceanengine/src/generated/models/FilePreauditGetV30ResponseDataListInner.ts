// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FilePreauditGetV30DataListMaterialChannel, FilePreauditGetV30DataListMaterialType, FilePreauditGetV30DataListStatus } from "../models";

export interface FilePreauditGetV30ResponseDataListInner {
  errmsg: string;
  material_channel: FilePreauditGetV30DataListMaterialChannel;
  material_type: FilePreauditGetV30DataListMaterialType;
  preaudit_id: number;
  status: FilePreauditGetV30DataListStatus;
  video_url: string;
}

