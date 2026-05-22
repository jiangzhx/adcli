// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_xj_page_detail.go
// Do not edit manually.

import type { PageStatus, PlayableType } from "../v3/index";

export interface XjPageDetail {
  page_id?: number | string;
  page_name?: string;
  playable_type?: PlayableType;
  preview_url?: string;
  page_status?: PageStatus;
  wechat_channels_live_reserve_id?: string;
  disable_code?: number;
  disable_message?: string;
  quote_creative_material?: boolean;
}

