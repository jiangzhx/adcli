import type { QualificationType } from "../v3/index";
export interface QualificationsDeleteRequest {
    account_id?: number | string;
    qualification_type?: QualificationType;
    qualification_id?: number | string;
    qualification_id_list?: number[];
}
