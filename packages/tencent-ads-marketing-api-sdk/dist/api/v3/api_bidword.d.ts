import { ApiClient, type ApiResponse } from "./client";
import type { BidwordAddRequest, BidwordAddResponseData, BidwordDeleteRequest, BidwordDeleteResponseData, BidwordGetResponseData, BidwordUpdateRequest, BidwordUpdateResponseData } from "../../model/v3/index";
export interface BidwordApiAddRequest {
    data: BidwordAddRequest;
}
export interface BidwordApiDeleteRequest {
    data: BidwordDeleteRequest;
}
export interface BidwordApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
}
export interface BidwordApiUpdateRequest {
    data: BidwordUpdateRequest;
}
export declare class BidwordApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BidwordApiAddRequest): Promise<BidwordAddResponseData>;
    addWithHttpInfo(request: BidwordApiAddRequest): Promise<ApiResponse<BidwordAddResponseData>>;
    delete(request: BidwordApiDeleteRequest): Promise<BidwordDeleteResponseData>;
    deleteWithHttpInfo(request: BidwordApiDeleteRequest): Promise<ApiResponse<BidwordDeleteResponseData>>;
    get(request: BidwordApiGetRequest): Promise<BidwordGetResponseData>;
    getWithHttpInfo(request: BidwordApiGetRequest): Promise<ApiResponse<BidwordGetResponseData>>;
    update(request: BidwordApiUpdateRequest): Promise<BidwordUpdateResponseData>;
    updateWithHttpInfo(request: BidwordApiUpdateRequest): Promise<ApiResponse<BidwordUpdateResponseData>>;
}
