// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_muse_ai_task_add_request.go
// Do not edit manually.

import type { Img2captionStruct, Img2imgStruct, MuseAiTaskType, Text2imgStruct } from "../v3/index";

export interface MuseAiTaskAddRequest {
  account_id?: number | string;
  task_type?: MuseAiTaskType;
  output_image_num?: number;
  img2img?: Img2imgStruct;
  text2img?: Text2imgStruct;
  img2caption?: Img2captionStruct;
}

