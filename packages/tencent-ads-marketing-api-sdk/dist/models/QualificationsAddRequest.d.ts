import type { QualificationSpec, QualificationType } from "../models";
export interface QualificationsAddRequest {
    account_id?: number | string;
    qualification_type?: QualificationType;
    qualification_spec?: QualificationSpec;
}
