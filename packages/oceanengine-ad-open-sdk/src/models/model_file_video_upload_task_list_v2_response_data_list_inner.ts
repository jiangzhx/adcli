// 由 oceanengine/ad_open_sdk_go models/model_file_video_upload_task_list_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { FileVideoUploadTaskListV2DataListStatus, FileVideoUploadTaskListV2ResponseDataListInnerVideoInfo } from "../models/index";

export interface FileVideoUploadTaskListV2ResponseDataListInner {
  create_time?: string;
  error_msg?: string;
  status?: FileVideoUploadTaskListV2DataListStatus;
  task_id?: number | string;
  video_info?: FileVideoUploadTaskListV2ResponseDataListInnerVideoInfo;
}

