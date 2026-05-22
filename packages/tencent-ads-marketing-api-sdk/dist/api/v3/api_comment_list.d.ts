import { ApiClient, type ApiResponse } from "./client";
import type { CommentListGetResponseData } from "../../model/v3/index";
export interface CommentListApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    count?: number;
    lastBuffer?: string;
    fields?: unknown;
}
export declare class CommentListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CommentListApiGetRequest): Promise<CommentListGetResponseData>;
    getWithHttpInfo(request: CommentListApiGetRequest): Promise<ApiResponse<CommentListGetResponseData>>;
}
