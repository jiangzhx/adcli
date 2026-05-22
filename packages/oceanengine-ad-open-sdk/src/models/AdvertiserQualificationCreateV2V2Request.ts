// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserQualificationCreateV2V2QualificationType, AdvertiserQualificationCreateV2V2RequestQualificationsInner } from "../models";

export interface AdvertiserQualificationCreateV2V2Request {
  advertiser_id: number | string;
  qualification_type: AdvertiserQualificationCreateV2V2QualificationType;
  qualifications: AdvertiserQualificationCreateV2V2RequestQualificationsInner[];
}

