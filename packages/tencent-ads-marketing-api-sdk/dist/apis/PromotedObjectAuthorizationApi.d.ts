import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotedObjectAuthorizationAddRequest, PromotedObjectAuthorizationAddResponseData, PromotedObjectAuthorizationGetResponseData } from "../models";
export interface PromotedObjectAuthorizationApiAddRequest {
    data: PromotedObjectAuthorizationAddRequest;
}
export interface PromotedObjectAuthorizationApiGetRequest {
    accountId: number | string;
    promotedObjectType: string;
    promotedObjectName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class PromotedObjectAuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PromotedObjectAuthorizationApiAddRequest): Promise<PromotedObjectAuthorizationAddResponseData>;
    addWithHttpInfo(request: PromotedObjectAuthorizationApiAddRequest): Promise<ApiResponse<PromotedObjectAuthorizationAddResponseData>>;
    get(request: PromotedObjectAuthorizationApiGetRequest): Promise<PromotedObjectAuthorizationGetResponseData>;
    getWithHttpInfo(request: PromotedObjectAuthorizationApiGetRequest): Promise<ApiResponse<PromotedObjectAuthorizationGetResponseData>>;
}
