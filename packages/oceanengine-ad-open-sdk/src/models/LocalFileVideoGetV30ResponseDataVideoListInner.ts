// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalFileVideoGetV30DataVideoListImageMode, LocalFileVideoGetV30DataVideoListMaterialProperties, LocalFileVideoGetV30DataVideoListSource } from "../models";

export interface LocalFileVideoGetV30ResponseDataVideoListInner {
  create_time?: string;
  duration?: number;
  image_mode?: LocalFileVideoGetV30DataVideoListImageMode;
  material_id?: number;
  material_properties?: LocalFileVideoGetV30DataVideoListMaterialProperties[];
  poster_url?: string;
  signature?: string;
  source?: LocalFileVideoGetV30DataVideoListSource;
  video_id?: string;
  video_name?: string;
  video_url?: string;
}

