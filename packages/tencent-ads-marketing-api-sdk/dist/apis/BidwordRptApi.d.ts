import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordRptGetRequest, BidwordRptGetResponseData } from "../models";
export interface BidwordRptApiGetRequest {
    data: BidwordRptGetRequest;
}
export declare class BidwordRptApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BidwordRptApiGetRequest): Promise<BidwordRptGetResponseData>;
    getWithHttpInfo(request: BidwordRptApiGetRequest): Promise<ApiResponse<BidwordRptGetResponseData>>;
}
