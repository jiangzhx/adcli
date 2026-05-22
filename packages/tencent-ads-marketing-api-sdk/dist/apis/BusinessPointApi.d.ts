import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPointGetRequest, BusinessPointGetResponseData } from "../models";
export interface BusinessPointApiGetRequest {
    data: BusinessPointGetRequest;
}
export declare class BusinessPointApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData>;
    getWithHttpInfo(request: BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>>;
}
