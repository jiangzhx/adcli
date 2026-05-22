import type { ExpandFieldStruct } from "../models";
export interface IndustryQualificationsSpec {
    system_industry_id?: number | string;
    business_scope_id?: number | string;
    qualification_code?: string;
    image_id_list?: string[];
    expand_field_list?: ExpandFieldStruct[];
}
