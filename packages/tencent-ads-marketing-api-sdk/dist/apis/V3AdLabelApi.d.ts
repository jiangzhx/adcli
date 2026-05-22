import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdLabelGetResponseData } from "../models";
export interface V3AdLabelApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3AdLabelApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AdLabelApiGetRequest): Promise<AdLabelGetResponseData>;
    getWithHttpInfo(request: V3AdLabelApiGetRequest): Promise<ApiResponse<AdLabelGetResponseData>>;
}
