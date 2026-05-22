import type { ExpandFieldStruct, QualificationType } from "../v3/index";
export interface QualificationsUpdateRequest {
    account_id?: number | string;
    qualification_type?: QualificationType;
    qualification_id?: number | string;
    image_id_list?: string[];
    expand_field_list?: ExpandFieldStruct[];
}
