// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_annotation_success_result.go
// Do not edit manually.

import type { AigcFlag, AigcSource, AigcStatus } from "../v3/index";

export interface AnnotationSuccessResult {
  resource_id?: string;
  resource_type?: string;
  aigc_flag?: AigcFlag;
  aigc_source?: AigcSource;
  user_aigc_status?: AigcStatus;
  system_aigc_status?: AigcStatus;
}

