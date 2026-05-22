import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelDealerDataGetRequest, VideoChannelDealerDataGetResponseData } from "../models";
export interface V3VideoChannelDealerDataApiGetRequest {
    data: VideoChannelDealerDataGetRequest;
}
export declare class V3VideoChannelDealerDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3VideoChannelDealerDataApiGetRequest): Promise<VideoChannelDealerDataGetResponseData>;
    getWithHttpInfo(request: V3VideoChannelDealerDataApiGetRequest): Promise<ApiResponse<VideoChannelDealerDataGetResponseData>>;
}
