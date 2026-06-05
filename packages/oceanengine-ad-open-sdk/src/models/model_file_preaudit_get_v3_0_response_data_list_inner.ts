// 由 oceanengine/ad_open_sdk_go models/model_file_preaudit_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { FilePreauditGetV30DataListMaterialChannel, FilePreauditGetV30DataListMaterialType, FilePreauditGetV30DataListStatus } from "../models/index";

export interface FilePreauditGetV30ResponseDataListInner {
  errmsg: string;
  material_channel: FilePreauditGetV30DataListMaterialChannel;
  material_type: FilePreauditGetV30DataListMaterialType;
  preaudit_id: number | string;
  status: FilePreauditGetV30DataListStatus;
  video_url: string;
}

