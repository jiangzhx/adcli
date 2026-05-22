import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ObjectCommentFlagUpdateRequest } from "../models";
export interface V3ObjectCommentFlagApiUpdateRequest {
    data: ObjectCommentFlagUpdateRequest;
}
export declare class V3ObjectCommentFlagApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3ObjectCommentFlagApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3ObjectCommentFlagApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
