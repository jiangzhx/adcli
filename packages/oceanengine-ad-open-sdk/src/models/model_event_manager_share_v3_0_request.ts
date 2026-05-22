// Generated from oceanengine/ad_open_sdk_go models/model_event_manager_share_v3_0_request.go
// Do not edit manually.

import type { EventManagerShareV30AllAccountType, EventManagerShareV30RequestAccountInfosInner, EventManagerShareV30ShareMode } from "../models/index";

export interface EventManagerShareV30Request {
  account_infos?: EventManagerShareV30RequestAccountInfosInner[];
  all_account_type?: EventManagerShareV30AllAccountType[];
  asset_id: number | string;
  organization_id: number | string;
  share_mode: EventManagerShareV30ShareMode;
}

