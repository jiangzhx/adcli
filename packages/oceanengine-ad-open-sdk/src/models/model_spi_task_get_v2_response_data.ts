// 由 oceanengine/ad_open_sdk_go models/model_spi_task_get_v2_response_data.go 生成
// 不要手动编辑。

import type { SpiTaskGetV2ResponseDataCursorInfo, SpiTaskGetV2ResponseDataListInner, SpiTaskGetV2ResponseDataPageInfo } from "../models/index";

export interface SpiTaskGetV2ResponseData {
  cursor_info?: SpiTaskGetV2ResponseDataCursorInfo;
  list?: SpiTaskGetV2ResponseDataListInner[];
  page_info?: SpiTaskGetV2ResponseDataPageInfo;
}

