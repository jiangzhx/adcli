import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordFlowGetResponseData } from "../models";
export interface V3BidwordFlowApiGetRequest {
    accountId: number | string;
    bidwordList: string[];
    orderBy?: unknown;
    fields?: unknown;
}
export declare class V3BidwordFlowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3BidwordFlowApiGetRequest): Promise<BidwordFlowGetResponseData>;
    getWithHttpInfo(request: V3BidwordFlowApiGetRequest): Promise<ApiResponse<BidwordFlowGetResponseData>>;
}
