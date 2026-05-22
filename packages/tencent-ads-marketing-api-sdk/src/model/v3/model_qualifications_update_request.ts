// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_qualifications_update_request.go
// Do not edit manually.

import type { ExpandFieldStruct, QualificationType } from "../v3/index";

export interface QualificationsUpdateRequest {
  account_id?: number | string;
  qualification_type?: QualificationType;
  qualification_id?: number | string;
  image_id_list?: string[];
  expand_field_list?: ExpandFieldStruct[];
}

