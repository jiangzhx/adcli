import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletCreateAddRequest, WalletCreateAddResponseData } from "../models";
export interface V3WalletCreateApiAddRequest {
    data: WalletCreateAddRequest;
}
export declare class V3WalletCreateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WalletCreateApiAddRequest): Promise<WalletCreateAddResponseData>;
    addWithHttpInfo(request: V3WalletCreateApiAddRequest): Promise<ApiResponse<WalletCreateAddResponseData>>;
}
