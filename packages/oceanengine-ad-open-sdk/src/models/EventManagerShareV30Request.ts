// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { EventManagerShareV30AllAccountType, EventManagerShareV30RequestAccountInfosInner, EventManagerShareV30ShareMode } from "../models";

export interface EventManagerShareV30Request {
  account_infos?: EventManagerShareV30RequestAccountInfosInner[];
  all_account_type?: EventManagerShareV30AllAccountType[];
  asset_id: number;
  organization_id: number;
  share_mode: EventManagerShareV30ShareMode;
}

