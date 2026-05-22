import { ApiClient, type ApiResponse } from "./client";
import type { BusinessPointGetResponseData } from "../../model/v3/index";
export interface BusinessPointApiGetRequest {
    siteSets: string[];
    accountId: number | string;
    fields?: unknown;
}
export declare class BusinessPointApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData>;
    getWithHttpInfo(request: BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>>;
}
