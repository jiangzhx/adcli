// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_images_add_response_data.go
// Do not edit manually.

import type { ImageType } from "../v3/index";

export interface ImagesAddResponseData {
  image_id?: string;
  image_width?: number;
  image_height?: number;
  image_file_size?: number;
  image_type?: ImageType;
  image_signature?: string;
  outer_image_id?: string;
  preview_url?: string;
  description?: string;
}

