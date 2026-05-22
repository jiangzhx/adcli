// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_rsp_component_group_struct.go
// Do not edit manually.

import type { PreviewItemStruct } from "../v3/index";

export interface RspComponentGroupStruct {
  component_id?: number | string;
  component_type?: string;
  original_creative_template_id_list?: number[];
  supported_target_creative_template_id_list?: number[];
  previews?: PreviewItemStruct[];
}

