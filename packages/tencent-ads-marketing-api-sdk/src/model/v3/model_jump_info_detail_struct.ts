// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_jump_info_detail_struct.go
// Do not edit manually.

import type { PageDetail, PageType } from "../v3/index";

export interface JumpInfoDetailStruct {
  page_type?: PageType;
  page_detail?: PageDetail;
  is_backup?: boolean;
  backup_index?: number;
  disable_code?: number;
  disable_message?: string;
}

