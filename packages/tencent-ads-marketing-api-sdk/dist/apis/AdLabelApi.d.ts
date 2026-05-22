import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdLabelGetResponseData } from "../models";
export interface AdLabelApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AdLabelApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdLabelApiGetRequest): Promise<AdLabelGetResponseData>;
    getWithHttpInfo(request: AdLabelApiGetRequest): Promise<ApiResponse<AdLabelGetResponseData>>;
}
