import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BidwordAddRequest, BidwordAddResponseData, BidwordDeleteRequest, BidwordDeleteResponseData, BidwordGetResponseData, BidwordUpdateRequest, BidwordUpdateResponseData } from "../models";
export interface V3BidwordApiAddRequest {
    data: BidwordAddRequest;
}
export interface V3BidwordApiDeleteRequest {
    data: BidwordDeleteRequest;
}
export interface V3BidwordApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
}
export interface V3BidwordApiUpdateRequest {
    data: BidwordUpdateRequest;
}
export declare class V3BidwordApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BidwordApiAddRequest): Promise<BidwordAddResponseData>;
    addWithHttpInfo(request: V3BidwordApiAddRequest): Promise<ApiResponse<BidwordAddResponseData>>;
    delete(request: V3BidwordApiDeleteRequest): Promise<BidwordDeleteResponseData>;
    deleteWithHttpInfo(request: V3BidwordApiDeleteRequest): Promise<ApiResponse<BidwordDeleteResponseData>>;
    get(request: V3BidwordApiGetRequest): Promise<BidwordGetResponseData>;
    getWithHttpInfo(request: V3BidwordApiGetRequest): Promise<ApiResponse<BidwordGetResponseData>>;
    update(request: V3BidwordApiUpdateRequest): Promise<BidwordUpdateResponseData>;
    updateWithHttpInfo(request: V3BidwordApiUpdateRequest): Promise<ApiResponse<BidwordUpdateResponseData>>;
}
