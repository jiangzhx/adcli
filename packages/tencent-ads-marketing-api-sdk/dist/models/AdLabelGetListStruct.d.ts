import type { AdLabelStruct, LabelIconItem, LabelRemarkItem, LabelType } from "../models";
export interface AdLabelGetListStruct {
    label_category?: string;
    label?: string[];
    icon?: LabelIconItem[];
    label_type?: LabelType;
    label_type_name?: string;
    label_remark?: LabelRemarkItem[];
    label_structs?: AdLabelStruct[];
}
