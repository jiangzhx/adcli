// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalQualificationGetV30DataIndustryQuaStatus, LocalQualificationGetV30DataStatus, LocalQualificationGetV30ResponseDataIndustriesInner, LocalQualificationGetV30ResponseDataSubject } from "../models";

export interface LocalQualificationGetV30ResponseData {
  advertiser_id?: number;
  industries?: LocalQualificationGetV30ResponseDataIndustriesInner[];
  industry_qua_status?: LocalQualificationGetV30DataIndustryQuaStatus;
  reject_reason?: string;
  status?: LocalQualificationGetV30DataStatus;
  subject?: LocalQualificationGetV30ResponseDataSubject;
}

