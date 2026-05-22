// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adcreative_previews_add_request.go
// Do not edit manually.

import type { ViewerIdType } from "../model/index";

export interface AdcreativePreviewsAddRequest {
  adgroup_id?: number | string;
  campaign_id?: number | string;
  user_id_type?: ViewerIdType;
  user_id_list?: string[];
  account_id?: number | string;
}

