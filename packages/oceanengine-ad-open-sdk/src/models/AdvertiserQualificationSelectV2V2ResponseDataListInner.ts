// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AdvertiserQualificationSelectV2V2ResponseDataListInnerImageListInner } from "../models";

export interface AdvertiserQualificationSelectV2V2ResponseDataListInner {
  audit_time: string;
  image_list?: AdvertiserQualificationSelectV2V2ResponseDataListInnerImageListInner[];
  picture_preview_url: string;
  qualification_id: number;
  qualification_type?: number;
  reject_reason: string;
  status: number;
}

