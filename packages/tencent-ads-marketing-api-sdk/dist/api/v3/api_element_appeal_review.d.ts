import { ApiClient, type ApiResponse } from "./client";
import type { ElementAppealReviewAddRequest, ElementAppealReviewGetResponseData } from "../../model/v3/index";
export interface ElementAppealReviewApiAddRequest {
    data: ElementAppealReviewAddRequest;
}
export interface ElementAppealReviewApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    componentId: number | string;
    elementId: number | string;
    elementFingerPrint: string;
    fields?: unknown;
}
export declare class ElementAppealReviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ElementAppealReviewApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: ElementAppealReviewApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: ElementAppealReviewApiGetRequest): Promise<ElementAppealReviewGetResponseData>;
    getWithHttpInfo(request: ElementAppealReviewApiGetRequest): Promise<ApiResponse<ElementAppealReviewGetResponseData>>;
}
