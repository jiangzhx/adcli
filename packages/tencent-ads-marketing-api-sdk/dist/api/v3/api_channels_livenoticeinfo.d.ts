import { ApiClient, type ApiResponse } from "./client";
import type { ChannelsLivenoticeinfoGetResponseData } from "../../model/v3/index";
export interface ChannelsLivenoticeinfoApiGetRequest {
    accountId: number | string;
    finderUsername?: string;
    nickname?: string;
    wechatChannelsAccountId?: string;
    fields?: unknown;
}
export declare class ChannelsLivenoticeinfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ChannelsLivenoticeinfoApiGetRequest): Promise<ChannelsLivenoticeinfoGetResponseData>;
    getWithHttpInfo(request: ChannelsLivenoticeinfoApiGetRequest): Promise<ApiResponse<ChannelsLivenoticeinfoGetResponseData>>;
}
