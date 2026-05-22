export interface CampaignsAddNegativewordRequest {
    account_id?: number | string;
    campaign_id?: number | string;
    phrase_negative_words?: string[];
    exact_negative_words?: string[];
}
