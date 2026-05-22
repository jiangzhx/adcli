// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_qualifications_add_request.go
// Do not edit manually.

import type { QualificationSpec, QualificationType } from "../v3/index";

export interface QualificationsAddRequest {
  account_id?: number | string;
  qualification_type?: QualificationType;
  qualification_spec?: QualificationSpec;
}

