import type { ItemType } from "../model/index";
export interface CreateControlListItem {
    item_type?: ItemType;
    item_name?: string;
    placeholder?: string;
    select_elements?: string[];
}
