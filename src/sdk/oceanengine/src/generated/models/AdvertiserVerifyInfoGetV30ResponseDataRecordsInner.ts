// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserVerifyInfoGetV30DataRecordsCheckType, AdvertiserVerifyInfoGetV30DataRecordsPlatform, AdvertiserVerifyInfoGetV30DataRecordsStatus, AdvertiserVerifyInfoGetV30DataRecordsVerifyType } from "../models";

export interface AdvertiserVerifyInfoGetV30ResponseDataRecordsInner {
  advertiser_id?: number;
  auth_time?: string;
  check_type?: AdvertiserVerifyInfoGetV30DataRecordsCheckType;
  expire_time?: string;
  platform: AdvertiserVerifyInfoGetV30DataRecordsPlatform;
  qualification_serial_no?: string;
  status: AdvertiserVerifyInfoGetV30DataRecordsStatus;
  verify_type: AdvertiserVerifyInfoGetV30DataRecordsVerifyType;
}

