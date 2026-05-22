import { ApiClient, type ApiResponse } from "./client";
import type { ChannelsCommentAddRequest, ChannelsCommentDeleteRequest } from "../../model/v3/index";
export interface ChannelsCommentApiAddRequest {
    data: ChannelsCommentAddRequest;
}
export interface ChannelsCommentApiDeleteRequest {
    data: ChannelsCommentDeleteRequest;
}
export declare class ChannelsCommentApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ChannelsCommentApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: ChannelsCommentApiAddRequest): Promise<ApiResponse<unknown>>;
    delete(request: ChannelsCommentApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: ChannelsCommentApiDeleteRequest): Promise<ApiResponse<unknown>>;
}
