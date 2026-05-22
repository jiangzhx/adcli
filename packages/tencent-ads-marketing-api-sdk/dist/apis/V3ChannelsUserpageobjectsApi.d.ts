import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsUserpageobjectsGetResponseData } from "../models";
export interface V3ChannelsUserpageobjectsApiGetRequest {
    accountId: number | string;
    finderUsername?: string;
    nickname?: string;
    lastBuffer?: string;
    count?: number;
    wechatChannelsAccountId?: string;
    adContext?: unknown;
    fields?: unknown;
}
export declare class V3ChannelsUserpageobjectsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ChannelsUserpageobjectsApiGetRequest): Promise<ChannelsUserpageobjectsGetResponseData>;
    getWithHttpInfo(request: V3ChannelsUserpageobjectsApiGetRequest): Promise<ApiResponse<ChannelsUserpageobjectsGetResponseData>>;
}
