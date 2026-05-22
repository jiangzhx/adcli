import { ApiClient, type ApiResponse } from "./client";
import type { BusinessPointGetRequest, BusinessPointGetResponseData } from "../model/index";
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
