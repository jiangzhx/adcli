import { ApiClient, type ApiResponse } from "./client";
import type { WildcardsGetResponseData } from "../../model/v3/index";
export interface WildcardsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    marketingCarrierType: string;
    fields?: unknown;
}
export declare class WildcardsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WildcardsApiGetRequest): Promise<WildcardsGetResponseData>;
    getWithHttpInfo(request: WildcardsApiGetRequest): Promise<ApiResponse<WildcardsGetResponseData>>;
}
