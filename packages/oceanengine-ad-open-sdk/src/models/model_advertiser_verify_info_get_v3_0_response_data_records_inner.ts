// 由 oceanengine/ad_open_sdk_go models/model_advertiser_verify_info_get_v3_0_response_data_records_inner.go 生成
// 不要手动编辑。

import type { AdvertiserVerifyInfoGetV30DataRecordsCheckType, AdvertiserVerifyInfoGetV30DataRecordsPlatform, AdvertiserVerifyInfoGetV30DataRecordsStatus, AdvertiserVerifyInfoGetV30DataRecordsVerifyType } from "../models/index";

export interface AdvertiserVerifyInfoGetV30ResponseDataRecordsInner {
  advertiser_id?: number | string;
  auth_time?: string;
  check_type?: AdvertiserVerifyInfoGetV30DataRecordsCheckType;
  expire_time?: string;
  platform: AdvertiserVerifyInfoGetV30DataRecordsPlatform;
  qualification_serial_no?: string;
  status: AdvertiserVerifyInfoGetV30DataRecordsStatus;
  verify_type: AdvertiserVerifyInfoGetV30DataRecordsVerifyType;
}

