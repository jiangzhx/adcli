import type { ApiErrorStruct, ReviewAdAppealGetResponseData } from "../models";
export interface ReviewAdAppealGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReviewAdAppealGetResponseData;
}
