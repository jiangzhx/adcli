// 由 oceanengine/ad_open_sdk_go models/model_file_preaudit_get_v3_0_filtering.go 生成
// 不要手动编辑。

import type { FilePreauditGetV30FilteringMaterialChannel, FilePreauditGetV30FilteringMaterialType, FilePreauditGetV30FilteringStatus } from "../models/index";

export interface FilePreauditGetV30Filtering {
  material_channel?: FilePreauditGetV30FilteringMaterialChannel;
  material_type?: FilePreauditGetV30FilteringMaterialType;
  preaudit_ids?: (number | string)[];
  status?: FilePreauditGetV30FilteringStatus;
}

