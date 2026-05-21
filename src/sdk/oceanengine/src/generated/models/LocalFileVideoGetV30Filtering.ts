// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalFileVideoGetV30FilteringAnalysisType, LocalFileVideoGetV30FilteringImageMode, LocalFileVideoGetV30FilteringMaterialSource } from "../models";

export interface LocalFileVideoGetV30Filtering {
  analysis_type?: LocalFileVideoGetV30FilteringAnalysisType[];
  end_time?: string;
  image_mode?: LocalFileVideoGetV30FilteringImageMode[];
  is_filter_unqualified?: boolean;
  material_source?: LocalFileVideoGetV30FilteringMaterialSource[];
  search_key_word?: string;
  start_time?: string;
}

