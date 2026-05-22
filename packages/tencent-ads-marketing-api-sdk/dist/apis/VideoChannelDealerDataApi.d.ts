import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelDealerDataGetRequest, VideoChannelDealerDataGetResponseData } from "../models";
export interface VideoChannelDealerDataApiGetRequest {
    data: VideoChannelDealerDataGetRequest;
}
export declare class VideoChannelDealerDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: VideoChannelDealerDataApiGetRequest): Promise<VideoChannelDealerDataGetResponseData>;
    getWithHttpInfo(request: VideoChannelDealerDataApiGetRequest): Promise<ApiResponse<VideoChannelDealerDataGetResponseData>>;
}
