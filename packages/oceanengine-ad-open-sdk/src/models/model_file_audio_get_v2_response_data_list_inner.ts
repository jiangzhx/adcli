// Generated from oceanengine/ad_open_sdk_go models/model_file_audio_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { FileAudioGetV2DataListSource } from "../models/index";

export interface FileAudioGetV2ResponseDataListInner {
  audio_id?: string;
  audio_url?: string;
  duration?: number;
  file_name?: string;
  material_id?: number | string;
  signature?: string;
  source?: FileAudioGetV2DataListSource;
}

