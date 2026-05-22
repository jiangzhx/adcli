import type { ApiErrorStruct, QualificationStructureGetResponseData } from "../v3/index";
export interface QualificationStructureGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationStructureGetResponseData;
}
