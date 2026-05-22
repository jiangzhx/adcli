import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WildcardsGetRequest, WildcardsGetResponseData } from "../models";
export interface WildcardsApiGetRequest {
    data: WildcardsGetRequest;
}
export declare class WildcardsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WildcardsApiGetRequest): Promise<WildcardsGetResponseData>;
    getWithHttpInfo(request: WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>>;
}
