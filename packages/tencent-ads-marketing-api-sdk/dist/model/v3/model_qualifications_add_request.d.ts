import type { QualificationSpec, QualificationType } from "../v3/index";
export interface QualificationsAddRequest {
    account_id?: number | string;
    qualification_type?: QualificationType;
    qualification_spec?: QualificationSpec;
}
