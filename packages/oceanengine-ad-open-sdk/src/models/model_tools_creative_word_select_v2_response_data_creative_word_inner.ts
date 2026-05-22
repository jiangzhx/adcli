// Generated from oceanengine/ad_open_sdk_go models/model_tools_creative_word_select_v2_response_data_creative_word_inner.go
// Do not edit manually.

import type { ToolsCreativeWordSelectV2DataCreativeWordContentType, ToolsCreativeWordSelectV2DataCreativeWordStatus } from "../models/index";

export interface ToolsCreativeWordSelectV2ResponseDataCreativeWordInner {
  content_type?: ToolsCreativeWordSelectV2DataCreativeWordContentType;
  creative_word_id?: number | string;
  default_word?: string;
  max_word_len?: number;
  min_word_len?: number;
  name?: string;
  status?: ToolsCreativeWordSelectV2DataCreativeWordStatus;
  user_rate?: number;
  words?: string[];
}

