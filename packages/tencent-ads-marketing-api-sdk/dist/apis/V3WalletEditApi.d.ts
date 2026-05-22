import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletEditAddRequest, WalletEditAddResponseData } from "../models";
export interface V3WalletEditApiAddRequest {
    data: WalletEditAddRequest;
}
export declare class V3WalletEditApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WalletEditApiAddRequest): Promise<WalletEditAddResponseData>;
    addWithHttpInfo(request: V3WalletEditApiAddRequest): Promise<ApiResponse<WalletEditAddResponseData>>;
}
