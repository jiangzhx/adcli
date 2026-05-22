import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { VideoChannelLeadsDataGetRequest, VideoChannelLeadsDataGetResponseData } from "../models";
export interface V3VideoChannelLeadsDataApiGetRequest {
    data: VideoChannelLeadsDataGetRequest;
}
export declare class V3VideoChannelLeadsDataApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3VideoChannelLeadsDataApiGetRequest): Promise<VideoChannelLeadsDataGetResponseData>;
    getWithHttpInfo(request: V3VideoChannelLeadsDataApiGetRequest): Promise<ApiResponse<VideoChannelLeadsDataGetResponseData>>;
}
