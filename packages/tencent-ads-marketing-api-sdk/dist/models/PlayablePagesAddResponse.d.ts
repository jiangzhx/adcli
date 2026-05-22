import type { ApiErrorStruct, PlayablePagesAddResponseData } from "../models";
export interface PlayablePagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PlayablePagesAddResponseData;
}
