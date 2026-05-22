import type { ApiErrorStruct, QualificationStructureGetResponseData } from "../models";
export interface QualificationStructureGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationStructureGetResponseData;
}
