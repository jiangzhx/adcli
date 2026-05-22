// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_adcreative_previews_add_request.go
// Do not edit manually.

import type { ViewerIdType } from "../v3/index";

export interface AdcreativePreviewsAddRequest {
  account_id?: number | string;
  adgroup_id?: number | string;
  user_id_type?: ViewerIdType;
  user_id_list?: string[];
}

