import { ApiClient, type ApiResponse } from "./client";
import type { VideoChannelDealerDataGetRequest, VideoChannelDealerDataGetResponseData } from "../../model/v3/index";
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
