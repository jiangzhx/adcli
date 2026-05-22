// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_label_get_list_struct.go
// Do not edit manually.

import type { LabelIconItem, LabelRemarkItem, LabelStruct, LabelType } from "../model/index";

export interface AdLabelGetListStruct {
  label_category?: string;
  label?: string[];
  icon?: LabelIconItem[];
  label_type?: LabelType;
  label_type_name?: string;
  label_remark?: LabelRemarkItem[];
  label_structs?: LabelStruct[];
}

