// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserInfoV2DataRole, AdvertiserInfoV2DataStatus } from "../models";

export interface AdvertiserInfoV2ResponseData {
  address?: string;
  brand?: string;
  company?: string;
  create_time?: string;
  first_industry_name?: string;
  id?: number | string;
  industry?: string;
  license_city?: string;
  license_no?: string;
  license_province?: string;
  license_url?: string;
  name?: string;
  note?: string;
  promotion_area?: string;
  promotion_center_city?: string;
  promotion_center_province?: string;
  reason?: string;
  role?: AdvertiserInfoV2DataRole;
  second_industry_name?: string;
  status?: AdvertiserInfoV2DataStatus;
}

