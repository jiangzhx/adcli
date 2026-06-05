// 由 oceanengine/ad_open_sdk_go models/model_ebp_advertiser_task_list_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { EbpAdvertiserTaskListV2DataListTaskStatus } from "../models/index";

export interface EbpAdvertiserTaskListV2ResponseDataListInner {
  create_time?: string;
  err_msg?: string;
  task_id?: number | string;
  task_status?: EbpAdvertiserTaskListV2DataListTaskStatus;
}

