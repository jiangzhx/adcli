import { ApiClient, type ApiResponse } from "./client";
import type { VideomakerTasksGetResponseData } from "../model/index";
export interface VideomakerTasksApiGetRequest {
    accountId: number | string;
    taskId: string;
    fields?: unknown;
}
export declare class VideomakerTasksApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: VideomakerTasksApiGetRequest): Promise<VideomakerTasksGetResponseData>;
    getWithHttpInfo(request: VideomakerTasksApiGetRequest): Promise<ApiResponse<VideomakerTasksGetResponseData>>;
}
