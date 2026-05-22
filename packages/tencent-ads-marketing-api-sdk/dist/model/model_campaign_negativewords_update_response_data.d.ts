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
