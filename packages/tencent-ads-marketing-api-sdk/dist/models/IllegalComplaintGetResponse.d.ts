import type { ApiErrorStruct, IllegalComplaintGetResponseData } from "../models";
export interface IllegalComplaintGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: IllegalComplaintGetResponseData;
}
