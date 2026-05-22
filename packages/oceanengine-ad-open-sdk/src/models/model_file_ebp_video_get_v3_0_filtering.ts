// Generated from oceanengine/ad_open_sdk_go models/model_file_ebp_video_get_v3_0_filtering.go
// Do not edit manually.

import type { FileEbpVideoGetV30FilteringEvaluateTypes, FileEbpVideoGetV30FilteringImageModes } from "../models/index";

export interface FileEbpVideoGetV30Filtering {
  evaluate_types?: FileEbpVideoGetV30FilteringEvaluateTypes[];
  file_name?: string;
  image_modes?: FileEbpVideoGetV30FilteringImageModes[];
  material_ids?: number | string[];
  sub_ebp_id?: number | string[];
}

