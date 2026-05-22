// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience } from "../models";

export interface QianchuanUniPromotionAdControlTaskUpdateV10Request {
  advertiser_id: number | string;
  audience?: QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience;
  bid?: number;
  budget?: number;
  duration?: number;
  material_ids?: number | string[];
  name: string;
  roi2_goal?: number;
  task_id: number | string;
}

