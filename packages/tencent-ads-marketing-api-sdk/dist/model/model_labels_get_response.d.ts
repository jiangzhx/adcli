import type { ApiErrorStruct, LabelsGetResponseData } from "../model/index";
export interface LabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LabelsGetResponseData;
}
