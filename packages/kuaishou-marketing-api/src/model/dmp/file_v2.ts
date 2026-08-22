// Generated from github.com/bububa/kwai-marketing-api/model/dmp/file_v2.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface FileV2 {
  file_path?: string;
  upload_file_type?: string;
  record_size?: number;
  match_type?: string;
  type?: number;
  file_size?: number;
  md5?: string;
  advertiser_id?: KuaishouId;
}
