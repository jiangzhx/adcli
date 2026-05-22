import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsFinderobjectGetResponseData } from "../models";
export interface V3ChannelsFinderobjectApiGetRequest {
    accountId: number | string;
    exportId: string;
    fields?: unknown;
}
export declare class V3ChannelsFinderobjectApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ChannelsFinderobjectApiGetRequest): Promise<ChannelsFinderobjectGetResponseData>;
    getWithHttpInfo(request: V3ChannelsFinderobjectApiGetRequest): Promise<ApiResponse<ChannelsFinderobjectGetResponseData>>;
}
