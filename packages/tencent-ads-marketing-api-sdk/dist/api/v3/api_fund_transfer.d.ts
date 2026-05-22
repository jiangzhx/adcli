import { ApiClient, type ApiResponse } from "./client";
import type { FundTransferAddRequest, FundTransferAddResponseData } from "../../model/v3/index";
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
