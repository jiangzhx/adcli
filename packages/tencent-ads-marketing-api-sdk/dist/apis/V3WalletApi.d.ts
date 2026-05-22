import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletGetResponseData } from "../models";
export interface V3WalletApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class V3WalletApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WalletApiGetRequest): Promise<WalletGetResponseData>;
    getWithHttpInfo(request: V3WalletApiGetRequest): Promise<ApiResponse<WalletGetResponseData>>;
}
