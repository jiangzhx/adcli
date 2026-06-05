// 由 oceanengine/ad_open_sdk_go models/model_dpa_detail_get_v2_filtering.go 生成
// 不要手动编辑。

import type { DpaDetailGetV2FilteringAuditStatus, DpaDetailGetV2FilteringIsRecommend, DpaDetailGetV2FilteringStatus } from "../models/index";

export interface DpaDetailGetV2Filtering {
  audit_status?: DpaDetailGetV2FilteringAuditStatus;
  dpa_categories?: number[];
  is_recommend?: DpaDetailGetV2FilteringIsRecommend;
  offline_modify_time?: string;
  product_id?: number | string;
  product_name?: string;
  spu_id?: string;
  status?: DpaDetailGetV2FilteringStatus;
}

