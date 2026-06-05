// 由 oceanengine/ad_open_sdk_go models/model_local_qualification_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { LocalQualificationGetV30DataIndustryQuaStatus, LocalQualificationGetV30DataStatus, LocalQualificationGetV30ResponseDataIndustriesInner, LocalQualificationGetV30ResponseDataSubject } from "../models/index";

export interface LocalQualificationGetV30ResponseData {
  advertiser_id?: number | string;
  industries?: LocalQualificationGetV30ResponseDataIndustriesInner[];
  industry_qua_status?: LocalQualificationGetV30DataIndustryQuaStatus;
  reject_reason?: string;
  status?: LocalQualificationGetV30DataStatus;
  subject?: LocalQualificationGetV30ResponseDataSubject;
}

