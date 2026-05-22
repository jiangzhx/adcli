import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLiveDataGetRequest, VideoChannelLiveDataGetResponseData } from "../models";
export interface V3VideoChannelLiveDataApiGetRequest {
    data: VideoChannelLiveDataGetRequest;
}
export declare class V3VideoChannelLiveDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3VideoChannelLiveDataApiGetRequest): Promise<VideoChannelLiveDataGetResponseData>;
    getWithHttpInfo(request: V3VideoChannelLiveDataApiGetRequest): Promise<ApiResponse<VideoChannelLiveDataGetResponseData>>;
}
