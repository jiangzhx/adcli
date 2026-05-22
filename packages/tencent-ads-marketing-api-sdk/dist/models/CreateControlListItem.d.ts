import type { ItemType } from "../models";
export interface CreateControlListItem {
    item_type?: ItemType;
    item_name?: string;
    placeholder?: string;
    select_elements?: string[];
}
