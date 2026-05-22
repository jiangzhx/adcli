// Generated from oceanengine/ad_open_sdk_go models/model_file_quality_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { FileQualityGetV30DataListStatus } from "../models/index";

export interface FileQualityGetV30ResponseDataListInner {
  errmsg: string;
  is_first_publish_material?: boolean;
  is_similar_expected_queue_material?: boolean;
  is_similar_queue_material?: boolean;
  material_id: number | string;
  status: FileQualityGetV30DataListStatus;
}

