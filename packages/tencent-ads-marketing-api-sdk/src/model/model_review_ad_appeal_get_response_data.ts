// Generated from tencentad/marketing-api-go-sdk pkg/model/model_review_ad_appeal_get_response_data.go
// Do not edit manually.

import type { AppealStatus } from "../model/index";

export interface ReviewAdAppealGetResponseData {
  account_id?: number | string;
  adgroup_id?: number | string;
  ad_id?: number | string;
  appeal_demand?: string;
  appeal_reason?: string;
  history_approval_ad_id?: number | string;
  appeal_result?: string;
  appeal_status?: AppealStatus;
  description?: string;
  image_list?: string[];
  reply_image_url_list?: string[];
}

