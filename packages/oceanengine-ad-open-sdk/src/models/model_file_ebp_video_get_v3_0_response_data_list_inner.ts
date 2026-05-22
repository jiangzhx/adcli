// Generated from oceanengine/ad_open_sdk_go models/model_file_ebp_video_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { FileEbpVideoGetV30DataListImageMode, FileEbpVideoGetV30ResponseDataListInnerMaterialProperties } from "../models/index";

export interface FileEbpVideoGetV30ResponseDataListInner {
  bit_rate?: number;
  create_time?: string;
  duration?: string;
  file_name?: string;
  height?: number;
  image_mode?: FileEbpVideoGetV30DataListImageMode;
  material_id?: number | string;
  material_properties?: FileEbpVideoGetV30ResponseDataListInnerMaterialProperties;
  poster_url?: string;
  signature?: string;
  size?: number;
  url?: string;
  video_id?: string;
  width?: number;
}

