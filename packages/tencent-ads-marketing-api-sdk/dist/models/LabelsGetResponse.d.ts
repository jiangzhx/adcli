import type { ApiErrorStruct, LabelsGetResponseData } from "../models";
export interface LabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LabelsGetResponseData;
}
