import type { AdQualificationSharedStatus, ExpandFieldStruct, QualificationStatus } from "../v3/index";
export interface AdQualificationsStruct {
    qualification_id?: number | string;
    qualification_code?: string;
    image_id_list?: string[];
    expand_field_list?: ExpandFieldStruct[];
    qualification_status?: QualificationStatus;
    expired_date?: string;
    is_mdm_shared?: AdQualificationSharedStatus;
    reject_message?: string;
    created_time?: number;
    last_modified_time?: number;
}
