// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserQualificationGetV30DataIndustryQuaStatus, AdvertiserQualificationGetV30DataStatus, AdvertiserQualificationGetV30ResponseDataIndustriesInner, AdvertiserQualificationGetV30ResponseDataSubject } from "../models";

export interface AdvertiserQualificationGetV30ResponseData {
  advertiser_id?: number | string;
  industries?: AdvertiserQualificationGetV30ResponseDataIndustriesInner[];
  industry_qua_status?: AdvertiserQualificationGetV30DataIndustryQuaStatus;
  reject_reason?: string;
  status?: AdvertiserQualificationGetV30DataStatus;
  subject?: AdvertiserQualificationGetV30ResponseDataSubject;
}

