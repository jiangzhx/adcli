// 由 oceanengine/ad_open_sdk_go models/model_tools_advertiser_diagnosis_suggestion_get_v3_0_response_data_suggestion_info_list_inner.go 生成
// 不要手动编辑。

import type { ToolsAdvertiserDiagnosisSuggestionGetV30DataSuggestionInfoListSuggestionCategory, ToolsAdvertiserDiagnosisSuggestionGetV30DataSuggestionInfoListSuggestionType, ToolsAdvertiserDiagnosisSuggestionGetV30ResponseDataSuggestionInfoListInnerSevenDaysRoiSuggestion } from "../models/index";

export interface ToolsAdvertiserDiagnosisSuggestionGetV30ResponseDataSuggestionInfoListInner {
  expire_timestamp?: string;
  name: string;
  seven_days_roi_suggestion?: ToolsAdvertiserDiagnosisSuggestionGetV30ResponseDataSuggestionInfoListInnerSevenDaysRoiSuggestion;
  suggestion_category: ToolsAdvertiserDiagnosisSuggestionGetV30DataSuggestionInfoListSuggestionCategory;
  suggestion_content?: string;
  suggestion_id: string;
  suggestion_intro: string;
  suggestion_predict_content?: string;
  suggestion_tag?: number;
  suggestion_type?: ToolsAdvertiserDiagnosisSuggestionGetV30DataSuggestionInfoListSuggestionType;
}

