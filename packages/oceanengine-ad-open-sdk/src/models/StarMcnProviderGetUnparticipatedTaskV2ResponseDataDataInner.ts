// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { StarMcnProviderGetUnparticipatedTaskV2ResponseDataDataInnerSmallAppInfo } from "../models";

export interface StarMcnProviderGetUnparticipatedTaskV2ResponseDataDataInner {
  commission_rate?: number;
  commission_rate_iaap?: string;
  component_type?: number;
  create_time: string;
  demand_icon?: string;
  demand_id: number;
  demand_name: string;
  evaluate_type?: number;
  expiration_time?: string;
  expiration_time_end?: string;
  first_category_id?: number;
  first_class_category?: number;
  participate_cope?: number;
  pay_type?: number;
  price?: number;
  product_category?: number;
  quota?: number;
  second_class_category?: number;
  small_app_info?: StarMcnProviderGetUnparticipatedTaskV2ResponseDataDataInnerSmallAppInfo;
  task_support_ad?: boolean;
}

