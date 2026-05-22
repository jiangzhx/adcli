import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLeadsDataGetRequest, VideoChannelLeadsDataGetResponseData } from "../models";
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
