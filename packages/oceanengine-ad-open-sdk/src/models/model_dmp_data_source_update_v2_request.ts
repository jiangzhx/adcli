// 由 oceanengine/ad_open_sdk_go models/model_dmp_data_source_update_v2_request.go 生成
// 不要手动编辑。

import type { DmpDataSourceUpdateV2DataFormat, DmpDataSourceUpdateV2FileStorageType, DmpDataSourceUpdateV2OperationType } from "../models/index";

export interface DmpDataSourceUpdateV2Request {
  advertiser_id: number | string;
  data_format: DmpDataSourceUpdateV2DataFormat;
  data_source_id: string;
  file_paths: string[];
  file_storage_type: DmpDataSourceUpdateV2FileStorageType;
  operation_type: DmpDataSourceUpdateV2OperationType;
}

