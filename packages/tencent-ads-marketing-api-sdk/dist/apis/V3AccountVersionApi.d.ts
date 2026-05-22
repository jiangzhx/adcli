import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AccountVersionGetResponseData } from "../models";
export interface V3AccountVersionApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3AccountVersionApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AccountVersionApiGetRequest): Promise<AccountVersionGetResponseData>;
    getWithHttpInfo(request: V3AccountVersionApiGetRequest): Promise<ApiResponse<AccountVersionGetResponseData>>;
}
