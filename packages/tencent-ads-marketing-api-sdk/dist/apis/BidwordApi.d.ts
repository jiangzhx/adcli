import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordAddRequest, BidwordAddResponseData, BidwordDeleteRequest, BidwordDeleteResponseData, BidwordGetRequest, BidwordGetResponseData, BidwordUpdateRequest, BidwordUpdateResponseData } from "../models";
export interface BidwordApiAddRequest {
    data: BidwordAddRequest;
}
export interface BidwordApiDeleteRequest {
    data: BidwordDeleteRequest;
}
export interface BidwordApiGetRequest {
    data: BidwordGetRequest;
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
