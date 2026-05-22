import type { AdQualificationSharedStatus, QualificationStatus } from "../model/index";
export interface AdQualificationsStruct {
    qualification_id?: number | string;
    qualification_code?: string;
    image_id_list?: string[];
    qualification_status?: QualificationStatus;
    expired_date?: string;
    is_mdm_shared?: AdQualificationSharedStatus;
    reject_message?: string;
    created_time?: number;
    last_modified_time?: number;
}
