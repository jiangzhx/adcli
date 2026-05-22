import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FundsGetResponseData } from "../models";
export interface FundsApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class FundsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: FundsApiGetRequest): Promise<FundsGetResponseData>;
    getWithHttpInfo(request: FundsApiGetRequest): Promise<ApiResponse<FundsGetResponseData>>;
}
