// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarMcnProviderGetParticipatedTaskV2ResponseDataDataInnerQuotaInfo } from "../models";

export interface StarMcnProviderGetParticipatedTaskV2ResponseDataDataInner {
  challenge_status?: number;
  create_time: string;
  demand_id: number;
  demand_name: string;
  pay_type?: number;
  provider_order_task_status?: number;
  quota_info?: StarMcnProviderGetParticipatedTaskV2ResponseDataDataInnerQuotaInfo;
  service_provider_profit_rate?: number;
  service_provider_profit_rate_channel?: Record<string, number>;
}

