import { ApiClient, type ApiResponse } from "./client";
import type { LocalStoresAddressParsingResultGetRequest, LocalStoresAddressParsingResultGetResponseData } from "../model/index";
export interface LocalStoresAddressParsingResultApiGetRequest {
    data: LocalStoresAddressParsingResultGetRequest;
}
export declare class LocalStoresAddressParsingResultApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LocalStoresAddressParsingResultApiGetRequest): Promise<LocalStoresAddressParsingResultGetResponseData>;
    getWithHttpInfo(request: LocalStoresAddressParsingResultApiGetRequest): Promise<ApiResponse<LocalStoresAddressParsingResultGetResponseData>>;
}
