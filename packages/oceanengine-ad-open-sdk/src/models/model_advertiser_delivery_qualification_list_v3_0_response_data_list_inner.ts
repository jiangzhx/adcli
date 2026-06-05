// 由 oceanengine/ad_open_sdk_go models/model_advertiser_delivery_qualification_list_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { AdvertiserDeliveryQualificationListV30DataListQualificationType, AdvertiserDeliveryQualificationListV30DataListStatus, AdvertiserDeliveryQualificationListV30ResponseDataListInnerImagesInner } from "../models/index";

export interface AdvertiserDeliveryQualificationListV30ResponseDataListInner {
  audit_time: string;
  images?: AdvertiserDeliveryQualificationListV30ResponseDataListInnerImagesInner[];
  qualification_id: number | string;
  qualification_type: AdvertiserDeliveryQualificationListV30DataListQualificationType;
  reject_reason: string;
  status: AdvertiserDeliveryQualificationListV30DataListStatus;
}

