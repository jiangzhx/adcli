// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DmpDataSourceCreateV2DataFormat, DmpDataSourceCreateV2DataSourceType, DmpDataSourceCreateV2FileStorageType } from "../models";

export interface DmpDataSourceCreateV2Request {
  advertiser_id: number | string;
  data_format: DmpDataSourceCreateV2DataFormat;
  data_source_name: string;
  data_source_type?: DmpDataSourceCreateV2DataSourceType;
  description?: string;
  file_paths: string[];
  file_storage_type: DmpDataSourceCreateV2FileStorageType;
}

