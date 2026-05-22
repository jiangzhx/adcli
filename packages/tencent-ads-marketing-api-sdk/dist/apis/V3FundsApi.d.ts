import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FundsGetResponseData } from "../models";
export interface V3FundsApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3FundsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3FundsApiGetRequest): Promise<FundsGetResponseData>;
    getWithHttpInfo(request: V3FundsApiGetRequest): Promise<ApiResponse<FundsGetResponseData>>;
}
