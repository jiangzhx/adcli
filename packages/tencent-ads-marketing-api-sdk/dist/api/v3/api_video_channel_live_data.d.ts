import { ApiClient, type ApiResponse } from "./client";
import type { VideoChannelLiveDataGetRequest, VideoChannelLiveDataGetResponseData } from "../../model/v3/index";
export interface VideoChannelLiveDataApiGetRequest {
    data: VideoChannelLiveDataGetRequest;
}
export declare class VideoChannelLiveDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: VideoChannelLiveDataApiGetRequest): Promise<VideoChannelLiveDataGetResponseData>;
    getWithHttpInfo(request: VideoChannelLiveDataApiGetRequest): Promise<ApiResponse<VideoChannelLiveDataGetResponseData>>;
}
