import { ApiClient, type ApiResponse } from "./client";
import type { IllegalComplaintGetRequest, IllegalComplaintGetResponseData } from "../../model/v3/index";
export interface IllegalComplaintApiAddRequest {
    accountId: number | string;
    illegalOrderId: string;
    complaintReason: string;
    file: Blob;
}
export interface IllegalComplaintApiGetRequest {
    data: IllegalComplaintGetRequest;
}
export declare class IllegalComplaintApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: IllegalComplaintApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: IllegalComplaintApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: IllegalComplaintApiGetRequest): Promise<IllegalComplaintGetResponseData>;
    getWithHttpInfo(request: IllegalComplaintApiGetRequest): Promise<ApiResponse<IllegalComplaintGetResponseData>>;
}
