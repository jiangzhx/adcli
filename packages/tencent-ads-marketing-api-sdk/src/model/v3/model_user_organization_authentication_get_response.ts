// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_user_organization_authentication_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, UserOrganizationAuthenticationGetResponseData } from "../v3/index";

export interface UserOrganizationAuthenticationGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: UserOrganizationAuthenticationGetResponseData;
}

