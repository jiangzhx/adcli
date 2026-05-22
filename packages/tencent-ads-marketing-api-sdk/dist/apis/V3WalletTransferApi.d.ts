import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletTransferAddRequest, WalletTransferAddResponseData } from "../models";
export interface V3WalletTransferApiAddRequest {
    data: WalletTransferAddRequest;
}
export declare class V3WalletTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WalletTransferApiAddRequest): Promise<WalletTransferAddResponseData>;
    addWithHttpInfo(request: V3WalletTransferApiAddRequest): Promise<ApiResponse<WalletTransferAddResponseData>>;
}
