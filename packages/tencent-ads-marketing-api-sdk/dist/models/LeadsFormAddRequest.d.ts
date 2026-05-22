import type { CreateControlListItem } from "../models";
export interface LeadsFormAddRequest {
    account_id?: number | string;
    component_name?: string;
    title?: string;
    sub_title?: string;
    submit_text?: string;
    items?: CreateControlListItem[];
}
