import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentElementUrgeReviewAddRequest, ComponentElementUrgeReviewAddResponseData, ComponentElementUrgeReviewGetResponseData } from "../models";
export interface V3ComponentElementUrgeReviewApiAddRequest {
    data: ComponentElementUrgeReviewAddRequest;
}
export interface V3ComponentElementUrgeReviewApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    componentIdList?: unknown;
    elementFingerprintList?: unknown;
    fields?: unknown;
}
export declare class V3ComponentElementUrgeReviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ComponentElementUrgeReviewApiAddRequest): Promise<ComponentElementUrgeReviewAddResponseData>;
    addWithHttpInfo(request: V3ComponentElementUrgeReviewApiAddRequest): Promise<ApiResponse<ComponentElementUrgeReviewAddResponseData>>;
    get(request: V3ComponentElementUrgeReviewApiGetRequest): Promise<ComponentElementUrgeReviewGetResponseData>;
    getWithHttpInfo(request: V3ComponentElementUrgeReviewApiGetRequest): Promise<ApiResponse<ComponentElementUrgeReviewGetResponseData>>;
}
