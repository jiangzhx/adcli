import { ApiClient, type ApiResponse } from "./client";
import type { WildcardsGetRequest, WildcardsGetResponseData } from "../model/index";
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
