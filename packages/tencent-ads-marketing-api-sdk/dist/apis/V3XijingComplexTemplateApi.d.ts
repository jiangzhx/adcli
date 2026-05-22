import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingComplexTemplateGetResponseData } from "../models";
export interface V3XijingComplexTemplateApiGetRequest {
    accountId: number | string;
    pageTemplateId: string;
    fields?: unknown;
}
export declare class V3XijingComplexTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3XijingComplexTemplateApiGetRequest): Promise<XijingComplexTemplateGetResponseData>;
    getWithHttpInfo(request: V3XijingComplexTemplateApiGetRequest): Promise<ApiResponse<XijingComplexTemplateGetResponseData>>;
}
