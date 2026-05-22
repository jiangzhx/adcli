import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLiveDataGetRequest, VideoChannelLiveDataGetResponseData } from "../models";
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
