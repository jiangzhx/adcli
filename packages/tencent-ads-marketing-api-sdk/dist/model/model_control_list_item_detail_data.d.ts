import type { ConfigsDetailDataArrayItem, ItemType } from "../model/index";
export interface ControlListItemDetailData {
    item_name?: string;
    item_type?: ItemType;
    placeholder?: string;
    select_elements?: ConfigsDetailDataArrayItem[];
}
