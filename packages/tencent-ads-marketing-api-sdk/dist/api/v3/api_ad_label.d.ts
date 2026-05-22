import { ApiClient, type ApiResponse } from "./client";
import type { AdLabelGetResponseData } from "../../model/v3/index";
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
