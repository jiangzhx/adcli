// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsCreativeWordSelectV2DataCreativeWordContentType, ToolsCreativeWordSelectV2DataCreativeWordStatus } from "../models";

export interface ToolsCreativeWordSelectV2ResponseDataCreativeWordInner {
  content_type?: ToolsCreativeWordSelectV2DataCreativeWordContentType;
  creative_word_id?: number;
  default_word?: string;
  max_word_len?: number;
  min_word_len?: number;
  name?: string;
  status?: ToolsCreativeWordSelectV2DataCreativeWordStatus;
  user_rate?: number;
  words?: string[];
}

