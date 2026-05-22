import { ApiClient, type ApiResponse } from "./client";
import type { ChannelsUserpageobjectsGetResponseData } from "../../model/v3/index";
export interface ChannelsUserpageobjectsApiGetRequest {
    accountId: number | string;
    finderUsername?: string;
    nickname?: string;
    lastBuffer?: string;
    count?: number;
    wechatChannelsAccountId?: string;
    adContext?: unknown;
    fields?: unknown;
}
export declare class ChannelsUserpageobjectsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ChannelsUserpageobjectsApiGetRequest): Promise<ChannelsUserpageobjectsGetResponseData>;
    getWithHttpInfo(request: ChannelsUserpageobjectsApiGetRequest): Promise<ApiResponse<ChannelsUserpageobjectsGetResponseData>>;
}
