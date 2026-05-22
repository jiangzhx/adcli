// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DmpDataSourceReadV2DataDataListDataSourceType, DmpDataSourceReadV2ResponseDataDataListInnerChangeLogsInner, DmpDataSourceReadV2ResponseDataDataListInnerDefaultAudience } from "../models";

export interface DmpDataSourceReadV2ResponseDataDataListInner {
  change_logs?: DmpDataSourceReadV2ResponseDataDataListInnerChangeLogsInner[];
  cover_num?: number;
  create_time?: string;
  data_source_id?: string;
  data_source_type?: DmpDataSourceReadV2DataDataListDataSourceType;
  default_audience?: DmpDataSourceReadV2ResponseDataDataListInnerDefaultAudience;
  description?: string;
  lastest_published_change_log_id?: number;
  lastest_published_time?: string;
  modify_time?: string;
  name?: string;
  status?: number;
  upload_num?: number;
}

