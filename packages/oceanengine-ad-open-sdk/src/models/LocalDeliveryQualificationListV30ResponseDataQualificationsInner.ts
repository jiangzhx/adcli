// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalDeliveryQualificationListV30ResponseDataQualificationsInnerImagesInner } from "../models";

export interface LocalDeliveryQualificationListV30ResponseDataQualificationsInner {
  audit_time: string;
  images?: LocalDeliveryQualificationListV30ResponseDataQualificationsInnerImagesInner[];
  qualification_id: number | string;
  qualification_type: number;
  qualification_type_name: string;
  qualification_type_version: number;
  reject_reason: string;
  status: number;
}

