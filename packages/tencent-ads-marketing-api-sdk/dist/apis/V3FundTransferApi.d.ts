import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FundTransferAddRequest, FundTransferAddResponseData } from "../models";
export interface V3FundTransferApiAddRequest {
    data: FundTransferAddRequest;
}
export declare class V3FundTransferApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3FundTransferApiAddRequest): Promise<FundTransferAddResponseData>;
    addWithHttpInfo(request: V3FundTransferApiAddRequest): Promise<ApiResponse<FundTransferAddResponseData>>;
}
