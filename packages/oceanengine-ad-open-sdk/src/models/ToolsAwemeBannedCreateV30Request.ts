// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsAwemeBannedCreateV30BannedType } from "../models";

export interface ToolsAwemeBannedCreateV30Request {
  advertiser_id: number;
  aweme_id?: string;
  aweme_user_ids?: string[];
  banned_type?: ToolsAwemeBannedCreateV30BannedType;
  is_apply_to_adv?: boolean;
  nickname_keywords?: string[];
}

