// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_element_reject_detail_info_list_struct.go
// Do not edit manually.

import type { ComponentInfoCanEmpty, RejectInfoLocationListStruct, ReviewElementType, ReviewResultStatus } from "../v3/index";

export interface ElementRejectDetailInfoListStruct {
  element_name?: string;
  element_type?: ReviewElementType;
  element_value?: string;
  component_info?: ComponentInfoCanEmpty;
  reason?: string;
  review_status?: ReviewResultStatus;
  reject_info_location?: RejectInfoLocationListStruct[];
}

