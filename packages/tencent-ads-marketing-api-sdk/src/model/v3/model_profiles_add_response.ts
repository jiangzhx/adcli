// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_profiles_add_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProfilesAddResponseData } from "../v3/index";

export interface ProfilesAddResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProfilesAddResponseData;
}

