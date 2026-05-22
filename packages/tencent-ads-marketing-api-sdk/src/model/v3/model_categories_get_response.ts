// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_categories_get_response.go
// Do not edit manually.

import type { ApiErrorStruct, CategoriesGetResponseData } from "../v3/index";

export interface CategoriesGetResponse {
  code?: number;
  message?: string;
  message_cn?: string;
  errors?: ApiErrorStruct[];
  data?: CategoriesGetResponseData;
}

