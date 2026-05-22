import type { ApiErrorStruct, SearchDynamicCreativesAddResponseData } from "../models";
export interface SearchDynamicCreativesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchDynamicCreativesAddResponseData;
}
