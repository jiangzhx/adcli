// 由 oceanengine/ad_open_sdk_go models/model_tools_advertiser_diagnosis_suggestion_accept_update_v3_0_request.go 生成
// 不要手动编辑。

import type { ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30RequestProjectAdjustListInner } from "../models/index";

export interface ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request {
  advertiser_id: number | string;
  project_adjust_list?: ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30RequestProjectAdjustListInner[];
  suggest_id: string;
}

