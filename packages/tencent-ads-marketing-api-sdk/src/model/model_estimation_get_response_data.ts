// Generated from tencentad/marketing-api-go-sdk pkg/model/model_estimation_get_response_data.go
// Do not edit manually.

import type { TargetingStatus } from "../model/index";

export interface EstimationGetResponseData {
  max_active_user_count?: number;
  approximate_count?: number;
  impression?: number;
  min_bid_amount?: number;
  max_bid_amount?: number;
  suggest_min_bid_amount?: number;
  suggest_max_bid_amount?: number;
  suggest_bid_content_ocpa?: string;
  min_users_daily?: number;
  max_users_daily?: number;
  min_exposure_daily?: number;
  max_exposure_daily?: number;
  targeting_status?: TargetingStatus;
  suggest_targeting?: string[];
  is_real_exposure_supported?: boolean;
}

