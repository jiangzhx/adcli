import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WildcardsGetResponseData } from "../models";
export interface V3WildcardsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    marketingCarrierType: string;
    fields?: unknown;
}
export declare class V3WildcardsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WildcardsApiGetRequest): Promise<WildcardsGetResponseData>;
    getWithHttpInfo(request: V3WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>>;
}
