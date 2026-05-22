// Generated from tencentad/marketing-api-go-sdk pkg/model/model_profiles_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, ProfilesGetResponseData } from "../model/index";

export interface ProfilesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: ProfilesGetResponseData;
}

