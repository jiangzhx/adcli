// Generated from oceanengine/ad_open_sdk_go models/model_tools_clue_form_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsClueFormGetV2DataListContainPhone, ToolsClueFormGetV2DataListFormType, ToolsClueFormGetV2DataListSubType } from "../models/index";

export interface ToolsClueFormGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  contain_phone?: ToolsClueFormGetV2DataListContainPhone;
  create_time?: string;
  enable_layer?: boolean;
  form_type?: ToolsClueFormGetV2DataListFormType;
  instance_id?: number | string;
  is_del?: number;
  lighting_page_url?: string;
  name?: string;
  sub_type?: ToolsClueFormGetV2DataListSubType;
  version?: number;
}

