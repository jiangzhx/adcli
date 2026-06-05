// 由 oceanengine/ad_open_sdk_go models/model_file_video_material_clear_task_result_get_v2_response_data_clear_result_inner.go 生成
// 不要手动编辑。

import type { FileVideoMaterialClearTaskResultGetV2DataClearResultClearMaterialTypes, FileVideoMaterialClearTaskResultGetV2DataClearResultClearResult } from "../models/index";

export interface FileVideoMaterialClearTaskResultGetV2ResponseDataClearResultInner {
  clear_material_types?: FileVideoMaterialClearTaskResultGetV2DataClearResultClearMaterialTypes[];
  clear_result?: FileVideoMaterialClearTaskResultGetV2DataClearResultClearResult;
  creative_fail_count?: number;
  creative_success_count?: number;
  material_id?: number | string;
  promotion_fail_count?: number;
  promotion_success_count?: number;
}

