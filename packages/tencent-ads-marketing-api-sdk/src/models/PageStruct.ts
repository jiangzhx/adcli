// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { PageAuditStatus, PagePublishStatus, PublishAppId, UnpublishAppId, XjPageType, XjPlayableType } from "../models";

export interface PageStruct {
  page_id?: number | string;
  page_service_id?: string;
  page_name?: string;
  page_type?: XjPageType;
  page_publish_status?: PagePublishStatus;
  page_status?: PageAuditStatus;
  page_last_modify_time?: string;
  page_owner_id?: number | string;
  publish_url?: string;
  reject_reason?: string;
  playable_type?: XjPlayableType;
  publish_app_id?: PublishAppId;
  unpublish_app_id?: UnpublishAppId;
}

