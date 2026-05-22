import { ApiClient, type ApiResponse } from "./client";
import type { ObjectCommentFlagUpdateRequest } from "../model/index";
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
