import type { ApiErrorStruct, ReviewAdAppealGetResponseData } from "../model/index";
export interface ReviewAdAppealGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReviewAdAppealGetResponseData;
}
