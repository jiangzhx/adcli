// Generated from tencentad/marketing-api-go-sdk pkg/model/model_images_get_list_struct.go
// Do not edit manually.

import type { ImageSourceType, ImageType, ImageUsage, MediaStatusType } from "../model/index";

export interface ImagesGetListStruct {
  image_id?: string;
  description?: string;
  source_signature?: string;
  preview_url?: string;
  source_type?: ImageSourceType;
  image_usage?: ImageUsage;
  created_time?: number;
  last_modified_time?: number;
  product_catalog_id?: number | string;
  product_outer_id?: string;
  source_reference_id?: string;
  owner_account_id?: string;
  status?: MediaStatusType;
  sample_aspect_ratio?: string;
  width?: number;
  height?: number;
  file_size?: number;
  type?: ImageType;
  signature?: string;
}

