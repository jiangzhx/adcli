import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WxGamePlayablePageGetResponseData } from "../models";
export interface V3WxGamePlayablePageApiGetRequest {
    accountId: number | string;
    appId: string;
    fields?: unknown;
}
export declare class V3WxGamePlayablePageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WxGamePlayablePageApiGetRequest): Promise<WxGamePlayablePageGetResponseData>;
    getWithHttpInfo(request: V3WxGamePlayablePageApiGetRequest): Promise<ApiResponse<WxGamePlayablePageGetResponseData>>;
}
