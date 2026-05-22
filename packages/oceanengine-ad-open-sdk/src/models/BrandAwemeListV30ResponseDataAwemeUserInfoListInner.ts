// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandAwemeListV30DataAwemeUserInfoListAppName, BrandAwemeListV30DataAwemeUserInfoListAuthStatus, BrandAwemeListV30DataAwemeUserInfoListAuthType, BrandAwemeListV30DataAwemeUserInfoListOperatePlatform } from "../models";

export interface BrandAwemeListV30ResponseDataAwemeUserInfoListInner {
  advertiser_id?: number;
  advertiser_name?: string;
  app_name?: BrandAwemeListV30DataAwemeUserInfoListAppName;
  auth_status?: BrandAwemeListV30DataAwemeUserInfoListAuthStatus;
  auth_type?: BrandAwemeListV30DataAwemeUserInfoListAuthType;
  aweme_id?: string;
  aweme_name?: string;
  bind_time?: string;
  left_valid_days?: number;
  operate_platform?: BrandAwemeListV30DataAwemeUserInfoListOperatePlatform;
}

