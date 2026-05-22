import { ApiClient, type ApiResponse } from "./client";
import type { ComponentElementUrgeReviewAddRequest, ComponentElementUrgeReviewAddResponseData, ComponentElementUrgeReviewGetResponseData } from "../../model/v3/index";
export interface ComponentElementUrgeReviewApiAddRequest {
    data: ComponentElementUrgeReviewAddRequest;
}
export interface ComponentElementUrgeReviewApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    componentIdList?: unknown;
    elementFingerprintList?: unknown;
    fields?: unknown;
}
export declare class ComponentElementUrgeReviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ComponentElementUrgeReviewApiAddRequest): Promise<ComponentElementUrgeReviewAddResponseData>;
    addWithHttpInfo(request: ComponentElementUrgeReviewApiAddRequest): Promise<ApiResponse<ComponentElementUrgeReviewAddResponseData>>;
    get(request: ComponentElementUrgeReviewApiGetRequest): Promise<ComponentElementUrgeReviewGetResponseData>;
    getWithHttpInfo(request: ComponentElementUrgeReviewApiGetRequest): Promise<ApiResponse<ComponentElementUrgeReviewGetResponseData>>;
}
