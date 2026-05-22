// Generated from tencentad/marketing-api-go-sdk pkg/model/model_image_processing_add_request.go
// Do not edit manually.

import type { CropOperationSpec, ImageOperationType } from "../model/index";

export interface ImageProcessingAddRequest {
  account_id?: number | string;
  image_id?: string;
  operation_type?: ImageOperationType;
  operation_spec?: CropOperationSpec;
  file_size_max?: number;
}

