// Generated from oceanengine/ad_open_sdk_go models/model_local_file_video_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalFileVideoGetV30FilteringAnalysisType, LocalFileVideoGetV30FilteringImageMode, LocalFileVideoGetV30FilteringMaterialSource } from "../models/index";

export interface LocalFileVideoGetV30Filtering {
  analysis_type?: LocalFileVideoGetV30FilteringAnalysisType[];
  end_time?: string;
  image_mode?: LocalFileVideoGetV30FilteringImageMode[];
  is_filter_unqualified?: boolean;
  material_source?: LocalFileVideoGetV30FilteringMaterialSource[];
  search_key_word?: string;
  start_time?: string;
}

