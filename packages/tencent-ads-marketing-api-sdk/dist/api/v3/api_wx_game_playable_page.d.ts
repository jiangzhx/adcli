import { ApiClient, type ApiResponse } from "./client";
import type { WxGamePlayablePageGetResponseData } from "../../model/v3/index";
export interface WxGamePlayablePageApiGetRequest {
    accountId: number | string;
    appId: string;
    fields?: unknown;
}
export declare class WxGamePlayablePageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WxGamePlayablePageApiGetRequest): Promise<WxGamePlayablePageGetResponseData>;
    getWithHttpInfo(request: WxGamePlayablePageApiGetRequest): Promise<ApiResponse<WxGamePlayablePageGetResponseData>>;
}
