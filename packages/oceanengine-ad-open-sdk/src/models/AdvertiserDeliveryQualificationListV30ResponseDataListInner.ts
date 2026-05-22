// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserDeliveryQualificationListV30DataListQualificationType, AdvertiserDeliveryQualificationListV30DataListStatus, AdvertiserDeliveryQualificationListV30ResponseDataListInnerImagesInner } from "../models";

export interface AdvertiserDeliveryQualificationListV30ResponseDataListInner {
  audit_time: string;
  images?: AdvertiserDeliveryQualificationListV30ResponseDataListInnerImagesInner[];
  qualification_id: number | string;
  qualification_type: AdvertiserDeliveryQualificationListV30DataListQualificationType;
  reject_reason: string;
  status: AdvertiserDeliveryQualificationListV30DataListStatus;
}

