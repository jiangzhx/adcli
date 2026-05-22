import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessPointGetResponseData } from "../models";
export interface V3BusinessPointApiGetRequest {
    siteSets: string[];
    accountId: number | string;
    fields?: unknown;
}
export declare class V3BusinessPointApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BusinessPointApiGetRequest): Promise<BusinessPointGetResponseData>;
    getWithHttpInfo(request: V3BusinessPointApiGetRequest): Promise<ApiResponse<BusinessPointGetResponseData>>;
}
