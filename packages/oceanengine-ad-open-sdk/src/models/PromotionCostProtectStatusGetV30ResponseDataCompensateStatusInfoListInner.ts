// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { PromotionCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus, PromotionCostProtectStatusGetV30DataCompensateStatusInfoListStatus } from "../models";

export interface PromotionCostProtectStatusGetV30ResponseDataCompensateStatusInfoListInner {
  compensate_amount?: number;
  compensate_status?: PromotionCostProtectStatusGetV30DataCompensateStatusInfoListCompensateStatus;
  end_reasons?: Record<string, string>;
  invalid_reasons?: Record<string, string>;
  query_id?: number | string;
  status?: PromotionCostProtectStatusGetV30DataCompensateStatusInfoListStatus;
  url?: string;
}

