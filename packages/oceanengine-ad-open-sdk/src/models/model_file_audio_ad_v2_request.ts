// Generated from oceanengine/ad_open_sdk_go models/model_file_audio_ad_v2_request.go
// Do not edit manually.

import type { FileAudioAdV2UploadType } from "../models/index";

export interface FileAudioAdV2Request {
  advertiser_id: number | string;
  audio_file?: Blob;
  audio_signature?: string;
  audio_url?: string;
  upload_type: FileAudioAdV2UploadType;
}

