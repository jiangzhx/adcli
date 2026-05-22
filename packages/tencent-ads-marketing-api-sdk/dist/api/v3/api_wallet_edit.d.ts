import { ApiClient, type ApiResponse } from "./client";
import type { WalletEditAddRequest, WalletEditAddResponseData } from "../../model/v3/index";
export interface WalletEditApiAddRequest {
    data: WalletEditAddRequest;
}
export declare class WalletEditApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WalletEditApiAddRequest): Promise<WalletEditAddResponseData>;
    addWithHttpInfo(request: WalletEditApiAddRequest): Promise<ApiResponse<WalletEditAddResponseData>>;
}
