// Generated from oceanengine/ad_open_sdk_go models/model_file_video_agent_v2_request.go
// Do not edit manually.

import type { FileVideoAgentV2UploadType } from "../models/index";

export interface FileVideoAgentV2Request {
  agent_id: number | string;
  file_name: string;
  is_aigc?: boolean;
  is_need_auth: boolean;
  upload_type?: FileVideoAgentV2UploadType;
  video_file?: Blob;
  video_signature?: string;
  video_url?: string;
}

