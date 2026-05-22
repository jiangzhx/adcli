import type { CreateLabelStruct } from "../model/index";
export interface MaterialLabelsAddRequest {
    account_id?: number | string;
    image_id_list?: string[];
    media_id_list?: string[];
    labels?: CreateLabelStruct[];
}
