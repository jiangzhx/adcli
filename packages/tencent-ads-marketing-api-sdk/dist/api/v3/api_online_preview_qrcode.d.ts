import { ApiClient, type ApiResponse } from "./client";
import type { OnlinePreviewQrcodeGetResponseData } from "../../model/v3/index";
export interface OnlinePreviewQrcodeApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    userIdType?: string;
    previewCreativeComponents?: unknown;
    fields?: unknown;
}
export declare class OnlinePreviewQrcodeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OnlinePreviewQrcodeApiGetRequest): Promise<OnlinePreviewQrcodeGetResponseData>;
    getWithHttpInfo(request: OnlinePreviewQrcodeApiGetRequest): Promise<ApiResponse<OnlinePreviewQrcodeGetResponseData>>;
}
