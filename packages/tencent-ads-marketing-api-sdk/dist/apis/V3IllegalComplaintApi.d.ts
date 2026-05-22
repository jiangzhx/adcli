import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { IllegalComplaintGetRequest, IllegalComplaintGetResponseData } from "../models";
export interface V3IllegalComplaintApiAddRequest {
    accountId: number | string;
    illegalOrderId: string;
    complaintReason: string;
    file: Blob;
}
export interface V3IllegalComplaintApiGetRequest {
    data: IllegalComplaintGetRequest;
}
export declare class V3IllegalComplaintApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3IllegalComplaintApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3IllegalComplaintApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: V3IllegalComplaintApiGetRequest): Promise<IllegalComplaintGetResponseData>;
    getWithHttpInfo(request: V3IllegalComplaintApiGetRequest): Promise<ApiResponse<IllegalComplaintGetResponseData>>;
}
