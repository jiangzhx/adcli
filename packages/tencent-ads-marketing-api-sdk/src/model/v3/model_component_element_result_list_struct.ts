// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_component_element_result_list_struct.go
// Do not edit manually.

import type { ComponentElementRejectDetailInfoListStruct, ReviewElementType, ReviewResultStatus } from "../v3/index";

export interface ComponentElementResultListStruct {
  element_id?: number | string;
  image_id?: string;
  video_id?: string;
  element_name?: string;
  element_value?: string;
  element_type?: ReviewElementType;
  review_status?: ReviewResultStatus;
  element_reject_detail_info?: ComponentElementRejectDetailInfoListStruct[];
}

