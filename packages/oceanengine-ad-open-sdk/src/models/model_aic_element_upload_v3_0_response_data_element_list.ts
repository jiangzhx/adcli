// 由 oceanengine/ad_open_sdk_go models/model_aic_element_upload_v3_0_response_data_element_list.go 生成
// 不要手动编辑。

import type { AicElementUploadV30DataElementListElementType, AicElementUploadV30DataElementListUseAs } from "../models/index";

export interface AicElementUploadV30ResponseDataElementList {
  create_time?: string;
  element_id: number | string;
  element_name: string;
  element_type?: AicElementUploadV30DataElementListElementType;
  element_url?: string;
  signature?: string;
  use_as?: AicElementUploadV30DataElementListUseAs;
}

