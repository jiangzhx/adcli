// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerShareCancelV30AllAccountType, EventManagerShareCancelV30RequestAccountInfosInner, EventManagerShareCancelV30ShareMode } from "../models";

export interface EventManagerShareCancelV30Request {
  account_infos?: EventManagerShareCancelV30RequestAccountInfosInner[];
  all_account_type?: EventManagerShareCancelV30AllAccountType[];
  asset_id: number;
  organization_id: number;
  share_mode: EventManagerShareCancelV30ShareMode;
}

