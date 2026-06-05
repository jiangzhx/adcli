// 由 oceanengine/ad_open_sdk_go models/model_dmp_data_source_create_v2_request.go 生成
// 不要手动编辑。

import type { DmpDataSourceCreateV2DataFormat, DmpDataSourceCreateV2DataSourceType, DmpDataSourceCreateV2FileStorageType } from "../models/index";

export interface DmpDataSourceCreateV2Request {
  advertiser_id: number | string;
  data_format: DmpDataSourceCreateV2DataFormat;
  data_source_name: string;
  data_source_type?: DmpDataSourceCreateV2DataSourceType;
  description?: string;
  file_paths: string[];
  file_storage_type: DmpDataSourceCreateV2FileStorageType;
}

