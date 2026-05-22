import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CommentListGetResponseData } from "../models";
export interface V3CommentListApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    count?: number;
    lastBuffer?: string;
    fields?: unknown;
}
export declare class V3CommentListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CommentListApiGetRequest): Promise<CommentListGetResponseData>;
    getWithHttpInfo(request: V3CommentListApiGetRequest): Promise<ApiResponse<CommentListGetResponseData>>;
}
