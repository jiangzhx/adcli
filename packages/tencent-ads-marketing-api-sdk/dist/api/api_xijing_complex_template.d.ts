import { ApiClient, type ApiResponse } from "./client";
import type { XijingComplexTemplateGetResponseData } from "../model/index";
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
