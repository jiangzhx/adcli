import { ApiClient, type ApiResponse } from "./client";
import type { XijingPageByComponentsAddRequest, XijingPageByComponentsAddResponseData } from "../../model/v3/index";
export interface XijingPageByComponentsApiAddRequest {
    data: XijingPageByComponentsAddRequest;
}
export declare class XijingPageByComponentsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: XijingPageByComponentsApiAddRequest): Promise<XijingPageByComponentsAddResponseData>;
    addWithHttpInfo(request: XijingPageByComponentsApiAddRequest): Promise<ApiResponse<XijingPageByComponentsAddResponseData>>;
}
