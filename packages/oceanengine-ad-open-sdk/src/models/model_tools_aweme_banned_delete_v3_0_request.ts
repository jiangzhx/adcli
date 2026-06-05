// 由 oceanengine/ad_open_sdk_go models/model_tools_aweme_banned_delete_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsAwemeBannedDeleteV30BannedType } from "../models/index";

export interface ToolsAwemeBannedDeleteV30Request {
  advertiser_id: number | string;
  aweme_id?: string;
  aweme_user_ids?: string[];
  banned_type: ToolsAwemeBannedDeleteV30BannedType;
  is_apply_to_adv?: boolean;
  nickname_keywords?: string[];
}

