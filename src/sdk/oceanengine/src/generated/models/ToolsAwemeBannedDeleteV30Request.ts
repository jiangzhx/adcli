// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsAwemeBannedDeleteV30BannedType } from "../models";

export interface ToolsAwemeBannedDeleteV30Request {
  advertiser_id: number;
  aweme_id?: string;
  aweme_user_ids?: string[];
  banned_type: ToolsAwemeBannedDeleteV30BannedType;
  is_apply_to_adv?: boolean;
  nickname_keywords?: string[];
}

