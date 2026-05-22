import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatAdLabelsGetResponseData } from "../models";
export interface WechatAdLabelsApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class WechatAdLabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatAdLabelsApiGetRequest): Promise<WechatAdLabelsGetResponseData>;
    getWithHttpInfo(request: WechatAdLabelsApiGetRequest): Promise<ApiResponse<WechatAdLabelsGetResponseData>>;
}
