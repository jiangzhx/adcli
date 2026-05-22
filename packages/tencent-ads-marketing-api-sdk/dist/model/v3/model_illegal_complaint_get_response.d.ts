import type { ApiErrorStruct, IllegalComplaintGetResponseData } from "../v3/index";
export interface IllegalComplaintGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: IllegalComplaintGetResponseData;
}
