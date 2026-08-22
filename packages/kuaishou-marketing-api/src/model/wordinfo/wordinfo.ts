// Generated from github.com/bububa/kwai-marketing-api/model/wordinfo/wordinfo.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface WordInfo {
  word_info_id?: KuaishouId;
  word?: string;
  match_type?: number;
  review_status?: number;
  put_status?: number;
  status?: number;
  error_reason?: string;
}
