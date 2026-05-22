// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { FileVideoUploadTaskListV2DataListStatus, FileVideoUploadTaskListV2ResponseDataListInnerVideoInfo } from "../models";

export interface FileVideoUploadTaskListV2ResponseDataListInner {
  create_time?: string;
  error_msg?: string;
  status?: FileVideoUploadTaskListV2DataListStatus;
  task_id?: number;
  video_info?: FileVideoUploadTaskListV2ResponseDataListInnerVideoInfo;
}

