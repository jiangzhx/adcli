// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_img2img_struct.go
// Do not edit manually.

import type { MuseAiDimensionSize, MuseAiImg2ImgStyle } from "../v3/index";

export interface Img2imgStruct {
  image_id?: string;
  similarity?: number;
  img2img_style?: MuseAiImg2ImgStyle;
  extend_text?: boolean;
  extend_size?: boolean;
  dimension_size?: MuseAiDimensionSize;
  image_caption?: string;
}

