// Generated from oceanengine/ad_open_sdk_go models/model_local_file_video_upload_task_list_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { LocalFileVideoUploadTaskListV30DataListStatus, LocalFileVideoUploadTaskListV30ResponseDataListInnerVideoInfo } from "../models/index";

export interface LocalFileVideoUploadTaskListV30ResponseDataListInner {
  create_time?: string;
  error_msg?: string;
  status?: LocalFileVideoUploadTaskListV30DataListStatus;
  task_id?: number | string;
  video_info?: LocalFileVideoUploadTaskListV30ResponseDataListInnerVideoInfo;
}

