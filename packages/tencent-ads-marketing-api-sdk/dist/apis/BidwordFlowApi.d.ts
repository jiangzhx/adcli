import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordFlowGetRequest, BidwordFlowGetResponseData } from "../models";
export interface BidwordFlowApiGetRequest {
    data: BidwordFlowGetRequest;
}
export declare class BidwordFlowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BidwordFlowApiGetRequest): Promise<BidwordFlowGetResponseData>;
    getWithHttpInfo(request: BidwordFlowApiGetRequest): Promise<ApiResponse<BidwordFlowGetResponseData>>;
}
