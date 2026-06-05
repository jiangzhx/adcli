// 由 oceanengine/ad_open_sdk_go models/model_file_audio_ad_v2_request.go 生成
// 不要手动编辑。

import type { FileAudioAdV2UploadType } from "../models/index";

export interface FileAudioAdV2Request {
  advertiser_id: number | string;
  audio_file?: Blob;
  audio_signature?: string;
  audio_url?: string;
  upload_type: FileAudioAdV2UploadType;
}

