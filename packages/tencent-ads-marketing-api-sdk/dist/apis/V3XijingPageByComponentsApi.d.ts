import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageByComponentsAddRequest, XijingPageByComponentsAddResponseData } from "../models";
export interface V3XijingPageByComponentsApiAddRequest {
    data: XijingPageByComponentsAddRequest;
}
export declare class V3XijingPageByComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3XijingPageByComponentsApiAddRequest): Promise<XijingPageByComponentsAddResponseData>;
    addWithHttpInfo(request: V3XijingPageByComponentsApiAddRequest): Promise<ApiResponse<XijingPageByComponentsAddResponseData>>;
}
