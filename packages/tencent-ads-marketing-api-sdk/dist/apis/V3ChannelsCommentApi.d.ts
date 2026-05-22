import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsCommentAddRequest, ChannelsCommentDeleteRequest } from "../models";
export interface V3ChannelsCommentApiAddRequest {
    data: ChannelsCommentAddRequest;
}
export interface V3ChannelsCommentApiDeleteRequest {
    data: ChannelsCommentDeleteRequest;
}
export declare class V3ChannelsCommentApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ChannelsCommentApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3ChannelsCommentApiAddRequest): Promise<ApiResponse<unknown>>;
    delete(request: V3ChannelsCommentApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3ChannelsCommentApiDeleteRequest): Promise<ApiResponse<unknown>>;
}
