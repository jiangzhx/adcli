import { ApiClient, type ApiResponse } from "./client";
import type { FundsGetResponseData } from "../model/index";
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
