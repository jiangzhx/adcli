// 由 oceanengine/ad_open_sdk_go models/model_dpa_template_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { DpaTemplateGetV2DataListTemplateMode, DpaTemplateGetV2ResponseDataListInnerTemplateDataListInner } from "../models/index";

export interface DpaTemplateGetV2ResponseDataListInner {
  industry?: number;
  is_public?: boolean;
  template_data_list?: DpaTemplateGetV2ResponseDataListInnerTemplateDataListInner[];
  template_id?: number | string;
  template_mode?: DpaTemplateGetV2DataListTemplateMode;
  template_name?: string;
}

