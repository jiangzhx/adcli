import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OnlinePreviewQrcodeGetResponseData } from "../models";
export interface V3OnlinePreviewQrcodeApiGetRequest {
    accountId: number | string;
    dynamicCreativeId: number | string;
    userIdType?: string;
    previewCreativeComponents?: unknown;
    fields?: unknown;
}
export declare class V3OnlinePreviewQrcodeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OnlinePreviewQrcodeApiGetRequest): Promise<OnlinePreviewQrcodeGetResponseData>;
    getWithHttpInfo(request: V3OnlinePreviewQrcodeApiGetRequest): Promise<ApiResponse<OnlinePreviewQrcodeGetResponseData>>;
}
