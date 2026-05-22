import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsLivenoticeinfoGetResponseData } from "../models";
export interface V3ChannelsLivenoticeinfoApiGetRequest {
    accountId: number | string;
    finderUsername?: string;
    nickname?: string;
    wechatChannelsAccountId?: string;
    fields?: unknown;
}
export declare class V3ChannelsLivenoticeinfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ChannelsLivenoticeinfoApiGetRequest): Promise<ChannelsLivenoticeinfoGetResponseData>;
    getWithHttpInfo(request: V3ChannelsLivenoticeinfoApiGetRequest): Promise<ApiResponse<ChannelsLivenoticeinfoGetResponseData>>;
}
