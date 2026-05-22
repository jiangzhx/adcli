import { ApiClient, type ApiResponse } from "./client";
import type { VideoChannelLeadsDataGetRequest, VideoChannelLeadsDataGetResponseData } from "../model/index";
export interface VideoChannelLeadsDataApiGetRequest {
    data: VideoChannelLeadsDataGetRequest;
}
export declare class VideoChannelLeadsDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: VideoChannelLeadsDataApiGetRequest): Promise<VideoChannelLeadsDataGetResponseData>;
    getWithHttpInfo(request: VideoChannelLeadsDataApiGetRequest): Promise<ApiResponse<VideoChannelLeadsDataGetResponseData>>;
}
