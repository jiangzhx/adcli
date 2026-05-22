import { ApiClient, type ApiResponse } from "./client";
import type { BidwordFlowGetResponseData } from "../../model/v3/index";
export interface BidwordFlowApiGetRequest {
    accountId: number | string;
    bidwordList: string[];
    orderBy?: unknown;
    fields?: unknown;
}
export declare class BidwordFlowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BidwordFlowApiGetRequest): Promise<BidwordFlowGetResponseData>;
    getWithHttpInfo(request: BidwordFlowApiGetRequest): Promise<ApiResponse<BidwordFlowGetResponseData>>;
}
