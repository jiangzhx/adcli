// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileAudioAdV2UploadType } from "../models";

export interface FileAudioAdV2Request {
  advertiser_id: number;
  audio_file?: File;
  audio_signature?: string;
  audio_url?: string;
  upload_type: FileAudioAdV2UploadType;
}

