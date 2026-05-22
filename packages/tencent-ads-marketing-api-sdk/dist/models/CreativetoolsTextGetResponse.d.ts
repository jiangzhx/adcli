import type { ApiErrorStruct, CreativetoolsTextGetResponseData } from "../models";
export interface CreativetoolsTextGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativetoolsTextGetResponseData;
}
