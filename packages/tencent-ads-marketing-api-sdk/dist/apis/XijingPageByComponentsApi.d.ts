import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageByComponentsAddRequest } from "../models";
export interface XijingPageByComponentsApiAddRequest {
    data: XijingPageByComponentsAddRequest;
}
export declare class XijingPageByComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: XijingPageByComponentsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: XijingPageByComponentsApiAddRequest): Promise<ApiResponse<unknown>>;
}
