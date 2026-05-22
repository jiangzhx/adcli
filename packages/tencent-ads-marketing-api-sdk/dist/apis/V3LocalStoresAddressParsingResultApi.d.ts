import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresAddressParsingResultGetRequest, LocalStoresAddressParsingResultGetResponseData } from "../models";
export interface V3LocalStoresAddressParsingResultApiGetRequest {
    data: LocalStoresAddressParsingResultGetRequest;
}
export declare class V3LocalStoresAddressParsingResultApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LocalStoresAddressParsingResultApiGetRequest): Promise<LocalStoresAddressParsingResultGetResponseData>;
    getWithHttpInfo(request: V3LocalStoresAddressParsingResultApiGetRequest): Promise<ApiResponse<LocalStoresAddressParsingResultGetResponseData>>;
}
