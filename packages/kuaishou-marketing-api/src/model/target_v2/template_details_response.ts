// Generated from github.com/bububa/kwai-marketing-api/model/target_v2/template_details_response.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { Target } from "./target";

export interface TemplateDetailsResponse {
  total_count?: number;
  current_page?: number;
  page_size?: number;
  details?: Template[];
}

export interface Template {
  template_id?: KuaishouId;
  template_name?: string;
  create_time?: string;
  update_time?: string;
  target?: Target;
  unit_count?: number;
}
