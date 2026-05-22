import { ApiClient, type ApiResponse } from "./client";
import type { BidwordFlowGetRequest, BidwordFlowGetResponseData } from "../model/index";
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
