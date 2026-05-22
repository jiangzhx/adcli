import type { ApiErrorStruct, PlayablePagesAddResponseData } from "../model/index";
export interface PlayablePagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PlayablePagesAddResponseData;
}
