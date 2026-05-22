// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_custom_audience_struct.go
// Do not edit manually.

import type { AudienceOnlineStatus, AudienceSource, AudienceSpec, AudienceType, ProcessStatus } from "../v3/index";

export interface CustomAudienceStruct {
  audience_id?: number | string;
  account_id?: number | string;
  name?: string;
  outer_audience_id?: string;
  description?: string;
  cooperated?: boolean;
  type?: AudienceType;
  source?: AudienceSource;
  status?: ProcessStatus;
  online_status?: AudienceOnlineStatus;
  is_own?: boolean;
  error_code?: number;
  user_count?: number;
  created_time?: string;
  last_modified_time?: string;
  audience_spec?: AudienceSpec;
}

