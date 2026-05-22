import type { ApiErrorStruct, LabelsGetResponseData } from "../v3/index";
export interface LabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LabelsGetResponseData;
}
