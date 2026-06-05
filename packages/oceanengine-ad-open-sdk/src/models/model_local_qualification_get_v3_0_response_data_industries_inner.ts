// 由 oceanengine/ad_open_sdk_go models/model_local_qualification_get_v3_0_response_data_industries_inner.go 生成
// 不要手动编辑。

import type { LocalQualificationGetV30ResponseDataIndustriesInnerOthersInner, LocalQualificationGetV30ResponseDataIndustriesInnerPromotion } from "../models/index";

export interface LocalQualificationGetV30ResponseDataIndustriesInner {
  industry1_id?: number | string;
  industry1_name?: string;
  industry2_id?: number | string;
  industry2_name?: string;
  industry3_id?: number | string;
  industry3_name?: string;
  is_history?: boolean;
  others?: LocalQualificationGetV30ResponseDataIndustriesInnerOthersInner[];
  promotion?: LocalQualificationGetV30ResponseDataIndustriesInnerPromotion;
}

