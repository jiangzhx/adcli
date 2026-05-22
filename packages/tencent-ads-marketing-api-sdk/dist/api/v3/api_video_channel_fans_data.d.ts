import { ApiClient, type ApiResponse } from "./client";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../../model/v3/index";
export interface VideoChannelFansDataApiGetRequest {
    data: VideoChannelFansDataGetRequest;
}
export declare class VideoChannelFansDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: VideoChannelFansDataApiGetRequest): Promise<VideoChannelFansDataGetResponseData>;
    getWithHttpInfo(request: VideoChannelFansDataApiGetRequest): Promise<ApiResponse<VideoChannelFansDataGetResponseData>>;
}
