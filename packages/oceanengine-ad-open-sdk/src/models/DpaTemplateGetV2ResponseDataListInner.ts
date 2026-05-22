// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DpaTemplateGetV2DataListTemplateMode, DpaTemplateGetV2ResponseDataListInnerTemplateDataListInner } from "../models";

export interface DpaTemplateGetV2ResponseDataListInner {
  industry?: number;
  is_public?: boolean;
  template_data_list?: DpaTemplateGetV2ResponseDataListInnerTemplateDataListInner[];
  template_id?: number;
  template_mode?: DpaTemplateGetV2DataListTemplateMode;
  template_name?: string;
}

