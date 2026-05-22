import type { ConfigsDetailDataArrayItem, ItemType } from "../models";
export interface ControlListItemDetailData {
    item_name?: string;
    item_type?: ItemType;
    placeholder?: string;
    select_elements?: ConfigsDetailDataArrayItem[];
}
