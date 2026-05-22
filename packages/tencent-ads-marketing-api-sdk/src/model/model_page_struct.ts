// Generated from tencentad/marketing-api-go-sdk pkg/model/model_page_struct.go
// Do not edit manually.

import type { PageAuditStatus, PagePublishStatus, PageType, PlayableType, PublishAppId, UnpublishAppId } from "../model/index";

export interface PageStruct {
  page_id?: number | string;
  page_service_id?: string;
  page_name?: string;
  page_type?: PageType;
  page_publish_status?: PagePublishStatus;
  page_status?: PageAuditStatus;
  page_last_modify_time?: string;
  page_owner_id?: number | string;
  publish_url?: string;
  reject_reason?: string;
  playable_type?: PlayableType;
  publish_app_id?: PublishAppId;
  unpublish_app_id?: UnpublishAppId;
}

