import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../models";
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
