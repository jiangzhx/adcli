// Generated from tencentad/marketing-api-go-sdk pkg/model/model_wechat_pages_get_list_struct.go
// Do not edit manually.

import type { CanvasType, PageElementsStruct, PageStatus, PageTypeRead, ShareContentSpec, WechatPageResourceStatus, WechatPageSourceType } from "../model/index";

export interface WechatPagesGetListStruct {
  page_id?: number | string;
  page_name?: string;
  created_time?: number;
  last_modified_time?: number;
  page_template_id?: number | string;
  share_content_spec?: ShareContentSpec;
  preview_url?: string;
  page_type?: PageTypeRead;
  source_type?: WechatPageSourceType;
  video_resource_status?: WechatPageResourceStatus;
  canvas_type?: CanvasType;
  owner_uid?: number;
  page_status?: PageStatus;
  page_elements_spec_list?: PageElementsStruct[];
}

