import type { ApiErrorStruct, CreativetoolsTextGetResponseData } from "../model/index";
export interface CreativetoolsTextGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativetoolsTextGetResponseData;
}
