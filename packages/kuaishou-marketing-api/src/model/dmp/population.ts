// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Population {
  orientation_id?: KuaishouId;
  orientation_name?: string;
  type?: number;
  population_type?: number;
  record_size?: number;
  match_size?: number;
  cover_num?: number;
  status?: number;
  create_time?: number;
  third_platform_code?: number;
  third_platform_name?: string;
}
