// 由 oceanengine/ad_open_sdk_go models/model_aic_element_get_v3_0_response_data_elements_inner.go 生成
// 不要手动编辑。

import type { AicElementGetV30DataElementsElementType, AicElementGetV30DataElementsUseAs } from "../models/index";

export interface AicElementGetV30ResponseDataElementsInner {
  create_time?: string;
  element_id: number | string;
  element_name: string;
  element_type?: AicElementGetV30DataElementsElementType;
  element_url?: string;
  signature?: string;
  update_time?: string;
  use_as?: AicElementGetV30DataElementsUseAs;
}

