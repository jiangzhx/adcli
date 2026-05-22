// Generated from tencentad/marketing-api-go-sdk pkg/model/model_campaign_negativewords_update_response_data.go
// Do not edit manually.

import type { DuplicateNegativeWordStruct, ExceedLengthNegativeWordStruct, ExceedLimitNegativeWordStruct, HasSpecialNegativeWordStruct, NegativeWordOperStatus, SuccessNegativeWordStruct } from "../model/index";

export interface CampaignNegativewordsUpdateResponseData {
  campaign_id?: number | string;
  status?: NegativeWordOperStatus;
  duplicate_words?: DuplicateNegativeWordStruct;
  exceed_length_words?: ExceedLengthNegativeWordStruct;
  exceed_limit_words?: ExceedLimitNegativeWordStruct;
  has_special_words?: HasSpecialNegativeWordStruct;
  success_words?: SuccessNegativeWordStruct;
}

