// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAwemeAuthListGetV10FilteringAuthRange, QianchuanAwemeAuthListGetV10FilteringAuthStatus, QianchuanAwemeAuthListGetV10FilteringAuthType } from "../models";

export interface QianchuanAwemeAuthListGetV10Filtering {
  auth_range?: QianchuanAwemeAuthListGetV10FilteringAuthRange;
  auth_status?: QianchuanAwemeAuthListGetV10FilteringAuthStatus;
  auth_type?: QianchuanAwemeAuthListGetV10FilteringAuthType;
  aweme_id?: number[];
  aweme_name?: string;
  aweme_show_id?: string[];
  is_cancellation_progress?: boolean;
}

