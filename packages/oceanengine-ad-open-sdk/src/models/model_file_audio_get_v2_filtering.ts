// Generated from oceanengine/ad_open_sdk_go models/model_file_audio_get_v2_filtering.go
// Do not edit manually.

import type { FileAudioGetV2FilteringSources } from "../models/index";

export interface FileAudioGetV2Filtering {
  audio_ids?: string[];
  end_time?: string;
  material_ids?: number | string[];
  signatures?: string[];
  sources?: FileAudioGetV2FilteringSources[];
  start_time?: string;
}

