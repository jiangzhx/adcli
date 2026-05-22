import type { ApiErrorStruct, SearchDynamicCreativesUpdateResponseData } from "../v3/index";
export interface SearchDynamicCreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchDynamicCreativesUpdateResponseData;
}
