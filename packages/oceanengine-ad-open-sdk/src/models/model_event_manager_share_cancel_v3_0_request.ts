// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_share_cancel_v3_0_request.go
// Do not edit manually.

import type { EventManagerShareCancelV30AllAccountType, EventManagerShareCancelV30RequestAccountInfosInner, EventManagerShareCancelV30ShareMode } from "../models/index";

export interface EventManagerShareCancelV30Request {
  account_infos?: EventManagerShareCancelV30RequestAccountInfosInner[];
  all_account_type?: EventManagerShareCancelV30AllAccountType[];
  asset_id: number | string;
  organization_id: number | string;
  share_mode: EventManagerShareCancelV30ShareMode;
}

