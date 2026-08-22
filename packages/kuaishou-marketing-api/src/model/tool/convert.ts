// Generated from github.com/bububa/kwai-marketing-api/model/tool/convert.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Convert {
  convert_id?: KuaishouId;
  convert_name?: string;
  type?: number;
  convert_target?: number;
  convert_count?: number;
  deep_conversion_type?: number;
  deep_conversion_count?: number;
  update_time?: string;
  create_time?: string;
  app_id?: KuaishouId;
  app_name?: string;
  click_url?: string;
}
