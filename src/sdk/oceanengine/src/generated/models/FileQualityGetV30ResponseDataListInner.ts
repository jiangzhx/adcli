// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileQualityGetV30DataListStatus } from "../models";

export interface FileQualityGetV30ResponseDataListInner {
  errmsg: string;
  is_first_publish_material?: boolean;
  is_similar_expected_queue_material?: boolean;
  is_similar_queue_material?: boolean;
  material_id: number;
  status: FileQualityGetV30DataListStatus;
}

