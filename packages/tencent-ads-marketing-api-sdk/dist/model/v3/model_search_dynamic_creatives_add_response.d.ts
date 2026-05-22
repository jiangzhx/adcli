import type { ApiErrorStruct, SearchDynamicCreativesAddResponseData } from "../v3/index";
export interface SearchDynamicCreativesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchDynamicCreativesAddResponseData;
}
