import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PagesGetResponseData } from "../models";
export interface V3PagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    adContext?: unknown;
    paginationMode?: string;
    cursor?: string;
    fields?: unknown;
}
export declare class V3PagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3PagesApiGetRequest): Promise<PagesGetResponseData>;
    getWithHttpInfo(request: V3PagesApiGetRequest): Promise<ApiResponse<PagesGetResponseData>>;
}
