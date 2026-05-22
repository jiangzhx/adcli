// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_review_result_list_struct.go
// Do not edit manually.

import type { ElementResultListStruct, RejectComponentComposeInfoStruct, SiteSetResultListStruct } from "../v3/index";

export interface ReviewResultListStruct {
  dynamic_creative_id?: number | string;
  element_result_list?: ElementResultListStruct[];
  site_set_result_list?: SiteSetResultListStruct[];
  reject_message_list?: string[];
  delay_message_list?: string[];
  is_all_component_compose_pending?: boolean;
  total_component_compose_count?: number;
  reject_component_compose_count?: number;
  pass_component_compose_count?: number;
  reject_component_compose_info_list?: RejectComponentComposeInfoStruct[];
}

