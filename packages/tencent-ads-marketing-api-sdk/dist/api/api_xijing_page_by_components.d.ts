import { ApiClient, type ApiResponse } from "./client";
import type { XijingPageByComponentsAddRequest } from "../model/index";
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
