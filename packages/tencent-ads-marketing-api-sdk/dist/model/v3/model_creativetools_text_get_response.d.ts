import type { ApiErrorStruct, CreativetoolsTextGetResponseData } from "../v3/index";
export interface CreativetoolsTextGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativetoolsTextGetResponseData;
}
