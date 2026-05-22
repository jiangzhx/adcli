import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingComplexTemplateGetResponseData } from "../models";
export interface XijingComplexTemplateApiGetRequest {
    accountId: number | string;
    pageTemplateId: string;
    fields?: unknown;
}
export declare class XijingComplexTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: XijingComplexTemplateApiGetRequest): Promise<XijingComplexTemplateGetResponseData>;
    getWithHttpInfo(request: XijingComplexTemplateApiGetRequest): Promise<ApiResponse<XijingComplexTemplateGetResponseData>>;
}
