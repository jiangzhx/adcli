import { ApiClient, type ApiResponse } from "./client";
import type { BidwordRptGetRequest, BidwordRptGetResponseData } from "../model/index";
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
