// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileUploadTaskCreateV2AccountType } from "../models";

export interface FileUploadTaskCreateV2Request {
  account_id: number;
  account_type: FileUploadTaskCreateV2AccountType;
  filename: string;
  is_aigc?: boolean;
  is_guide_video?: boolean;
  is_need_auth?: boolean;
  labels?: string[];
  video_url: string;
}

