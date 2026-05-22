// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_qualification_create_v2_v2_request.go
// Do not edit manually.

import type { AdvertiserQualificationCreateV2V2QualificationType, AdvertiserQualificationCreateV2V2RequestQualificationsInner } from "../models/index";

export interface AdvertiserQualificationCreateV2V2Request {
  advertiser_id: number | string;
  qualification_type: AdvertiserQualificationCreateV2V2QualificationType;
  qualifications: AdvertiserQualificationCreateV2V2RequestQualificationsInner[];
}

