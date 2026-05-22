// Generated from oceanengine/ad_open_sdk_go models/model_ebp_advertiser_task_list_v2_response_data_list_inner.go
// Do not edit manually.

import type { EbpAdvertiserTaskListV2DataListTaskStatus } from "../models/index";

export interface EbpAdvertiserTaskListV2ResponseDataListInner {
  create_time?: string;
  err_msg?: string;
  task_id?: number | string;
  task_status?: EbpAdvertiserTaskListV2DataListTaskStatus;
}

