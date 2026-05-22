// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ExpandFieldStruct, QualificationType } from "../models";

export interface QualificationsUpdateRequest {
  account_id?: number | string;
  qualification_type?: QualificationType;
  qualification_id?: number | string;
  image_id_list?: string[];
  expand_field_list?: ExpandFieldStruct[];
}

