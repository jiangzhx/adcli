// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience } from "../models";

export interface QianchuanUniPromotionAdControlTaskUpdateV10Request {
  advertiser_id: number;
  audience?: QianchuanUniPromotionAdControlTaskUpdateV10RequestAudience;
  bid?: number;
  budget?: number;
  duration?: number;
  material_ids?: number[];
  name: string;
  roi2_goal?: number;
  task_id: number;
}

