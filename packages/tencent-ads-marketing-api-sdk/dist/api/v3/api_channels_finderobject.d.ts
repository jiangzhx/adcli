import { ApiClient, type ApiResponse } from "./client";
import type { ChannelsFinderobjectGetResponseData } from "../../model/v3/index";
export interface ChannelsFinderobjectApiGetRequest {
    accountId: number | string;
    exportId: string;
    fields?: unknown;
}
export declare class ChannelsFinderobjectApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ChannelsFinderobjectApiGetRequest): Promise<ChannelsFinderobjectGetResponseData>;
    getWithHttpInfo(request: ChannelsFinderobjectApiGetRequest): Promise<ApiResponse<ChannelsFinderobjectGetResponseData>>;
}
