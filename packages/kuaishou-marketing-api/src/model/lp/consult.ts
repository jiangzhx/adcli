// Generated from github.com/bububa/kwai-marketing-api/model/lp/consult.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Consult {
  id?: KuaishouId;
  title?: string;
  create_time?: number;
  last_session_time?: number;
  third_party_app_id?: number;
  consultants_num?: number;
}
