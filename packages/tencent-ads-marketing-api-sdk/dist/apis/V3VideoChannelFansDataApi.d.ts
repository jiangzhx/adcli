import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelFansDataGetRequest, VideoChannelFansDataGetResponseData } from "../models";
export interface V3VideoChannelFansDataApiGetRequest {
    data: VideoChannelFansDataGetRequest;
}
export declare class V3VideoChannelFansDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3VideoChannelFansDataApiGetRequest): Promise<VideoChannelFansDataGetResponseData>;
    getWithHttpInfo(request: V3VideoChannelFansDataApiGetRequest): Promise<ApiResponse<VideoChannelFansDataGetResponseData>>;
}
