// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_get_data.go
// Do not edit manually.

import type { Dactag, InfoItem, PageInfo } from "../v3/index";

export interface GetData {
  image_id?: number | string;
  media_id?: number | string;
  info?: InfoItem[];
  set_name?: string;
  marketing_asset_id?: number | string;
  marketing_asset_outer_id?: string;
  marketing_target_type?: string;
  audit_status?: number;
  audit_msg?: string;
  dcatag_list?: Dactag[];
  page_info?: PageInfo;
}

