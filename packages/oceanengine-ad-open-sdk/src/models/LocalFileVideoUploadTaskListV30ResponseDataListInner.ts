// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalFileVideoUploadTaskListV30DataListStatus, LocalFileVideoUploadTaskListV30ResponseDataListInnerVideoInfo } from "../models";

export interface LocalFileVideoUploadTaskListV30ResponseDataListInner {
  create_time?: string;
  error_msg?: string;
  status?: LocalFileVideoUploadTaskListV30DataListStatus;
  task_id?: number;
  video_info?: LocalFileVideoUploadTaskListV30ResponseDataListInnerVideoInfo;
}

