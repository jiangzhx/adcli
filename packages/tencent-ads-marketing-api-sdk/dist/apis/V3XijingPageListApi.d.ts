import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageListGetResponseData } from "../models";
export interface V3XijingPageListApiGetRequest {
    accountId: number | string;
    pageId?: number | string;
    pageServiceId?: string;
    pageName?: string;
    pageType?: unknown;
    pageLastModifyStartTime?: string;
    pageLastModifyEndTime?: string;
    pageSize?: number;
    pageIndex?: number;
    pagePublishStatus?: unknown;
    pageStatus?: unknown;
    pageSource?: string;
    pageOwnerId?: number | string;
    appId?: number | string;
    appType?: string;
    queryType?: string;
    fields?: unknown;
}
export declare class V3XijingPageListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3XijingPageListApiGetRequest): Promise<XijingPageListGetResponseData>;
    getWithHttpInfo(request: V3XijingPageListApiGetRequest): Promise<ApiResponse<XijingPageListGetResponseData>>;
}
