// Generated from oceanengine/ad_open_sdk_go models/model_star_mcn_provider_get_participated_task_v2_response_data_data_inner.go
// Do not edit manually.

import type { StarMcnProviderGetParticipatedTaskV2ResponseDataDataInnerQuotaInfo } from "../models/index";

export interface StarMcnProviderGetParticipatedTaskV2ResponseDataDataInner {
  challenge_status?: number;
  create_time: string;
  demand_id: number | string;
  demand_name: string;
  pay_type?: number;
  provider_order_task_status?: number;
  quota_info?: StarMcnProviderGetParticipatedTaskV2ResponseDataDataInnerQuotaInfo;
  service_provider_profit_rate?: number;
  service_provider_profit_rate_channel?: Record<string, number>;
}

