// 由 oceanengine/ad_open_sdk_go models/model_file_upload_task_create_v2_request.go 生成
// 不要手动编辑。

import type { FileUploadTaskCreateV2AccountType } from "../models/index";

export interface FileUploadTaskCreateV2Request {
  account_id: number | string;
  account_type: FileUploadTaskCreateV2AccountType;
  filename: string;
  is_aigc?: boolean;
  is_guide_video?: boolean;
  is_need_auth?: boolean;
  labels?: string[];
  video_url: string;
}

