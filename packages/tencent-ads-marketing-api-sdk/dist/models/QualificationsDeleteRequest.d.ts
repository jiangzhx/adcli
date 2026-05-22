import type { QualificationType } from "../models";
export interface QualificationsDeleteRequest {
    account_id?: number | string;
    qualification_type?: QualificationType;
    qualification_id?: number | string;
    qualification_id_list?: number[];
}
