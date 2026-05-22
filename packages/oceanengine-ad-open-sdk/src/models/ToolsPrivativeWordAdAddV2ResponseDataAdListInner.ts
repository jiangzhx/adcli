// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsPrivativeWordAdAddV2ResponseDataAdListInnerDuplicateWords, ToolsPrivativeWordAdAddV2ResponseDataAdListInnerExceedLengthWords, ToolsPrivativeWordAdAddV2ResponseDataAdListInnerExceedLimitWords, ToolsPrivativeWordAdAddV2ResponseDataAdListInnerHasEmojiWords, ToolsPrivativeWordAdAddV2ResponseDataAdListInnerSuccessWords } from "../models";

export interface ToolsPrivativeWordAdAddV2ResponseDataAdListInner {
  ad_id?: number;
  duplicate_words?: ToolsPrivativeWordAdAddV2ResponseDataAdListInnerDuplicateWords;
  exceed_length_words?: ToolsPrivativeWordAdAddV2ResponseDataAdListInnerExceedLengthWords;
  exceed_limit_words?: ToolsPrivativeWordAdAddV2ResponseDataAdListInnerExceedLimitWords;
  has_emoji_words?: ToolsPrivativeWordAdAddV2ResponseDataAdListInnerHasEmojiWords;
  status?: string;
  success_words?: ToolsPrivativeWordAdAddV2ResponseDataAdListInnerSuccessWords;
}

