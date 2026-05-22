import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ElementAppealReviewAddRequest, ElementAppealReviewGetResponseData } from "../models";
export interface V3ElementAppealReviewApiAddRequest {
    data: ElementAppealReviewAddRequest;
}
export interface V3ElementAppealReviewApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    componentId: number | string;
    elementId: number | string;
    elementFingerPrint: string;
    fields?: unknown;
}
export declare class V3ElementAppealReviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ElementAppealReviewApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3ElementAppealReviewApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: V3ElementAppealReviewApiGetRequest): Promise<ElementAppealReviewGetResponseData>;
    getWithHttpInfo(request: V3ElementAppealReviewApiGetRequest): Promise<ApiResponse<ElementAppealReviewGetResponseData>>;
}
