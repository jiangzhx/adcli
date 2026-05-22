// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileVideoAgentV2UploadType } from "../models";

export interface FileVideoAgentV2Request {
  agent_id: number;
  file_name: string;
  is_aigc?: boolean;
  is_need_auth: boolean;
  upload_type?: FileVideoAgentV2UploadType;
  video_file?: File;
  video_signature?: string;
  video_url?: string;
}

