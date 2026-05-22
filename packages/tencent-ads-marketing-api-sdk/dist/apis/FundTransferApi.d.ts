import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FundTransferAddRequest, FundTransferAddResponseData } from "../models";
export interface FundTransferApiAddRequest {
    data: FundTransferAddRequest;
}
export declare class FundTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: FundTransferApiAddRequest): Promise<FundTransferAddResponseData>;
    addWithHttpInfo(request: FundTransferApiAddRequest): Promise<ApiResponse<FundTransferAddResponseData>>;
}
