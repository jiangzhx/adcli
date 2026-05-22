export interface MaterialLabelsUpdateRequest {
    account_id?: number | string;
    organization_id?: number | string;
    label_id?: number | string;
    label_name?: string;
    first_label_level_name?: string;
    second_label_level_name?: string;
}
