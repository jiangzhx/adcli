// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_qualification_select_v2_v2_response_data_list_inner.go
// Do not edit manually.

import type { AdvertiserQualificationSelectV2V2ResponseDataListInnerImageListInner } from "../models/index";

export interface AdvertiserQualificationSelectV2V2ResponseDataListInner {
  audit_time: string;
  image_list?: AdvertiserQualificationSelectV2V2ResponseDataListInnerImageListInner[];
  picture_preview_url: string;
  qualification_id: number | string;
  qualification_type?: number;
  reject_reason: string;
  status: number;
}

