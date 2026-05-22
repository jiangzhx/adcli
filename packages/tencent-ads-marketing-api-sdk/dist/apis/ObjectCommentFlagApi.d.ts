import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ObjectCommentFlagUpdateRequest } from "../models";
export interface ObjectCommentFlagApiUpdateRequest {
    data: ObjectCommentFlagUpdateRequest;
}
export declare class ObjectCommentFlagApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: ObjectCommentFlagApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: ObjectCommentFlagApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
