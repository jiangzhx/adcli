import { ApiClient, type ApiResponse } from "./client";
import type { WalletGetResponseData } from "../../model/v3/index";
export interface WalletApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class WalletApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WalletApiGetRequest): Promise<WalletGetResponseData>;
    getWithHttpInfo(request: WalletApiGetRequest): Promise<ApiResponse<WalletGetResponseData>>;
}
