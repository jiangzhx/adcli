export interface AdgroupsUpdateNegativewordRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    phrase_negative_words?: string[];
    exact_negative_words?: string[];
}
