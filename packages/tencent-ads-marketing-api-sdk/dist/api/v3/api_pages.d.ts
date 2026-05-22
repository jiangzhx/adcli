import { ApiClient, type ApiResponse } from "./client";
import type { PagesGetResponseData } from "../../model/v3/index";
export interface PagesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    adContext?: unknown;
    paginationMode?: string;
    cursor?: string;
    fields?: unknown;
}
export declare class PagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: PagesApiGetRequest): Promise<PagesGetResponseData>;
    getWithHttpInfo(request: PagesApiGetRequest): Promise<ApiResponse<PagesGetResponseData>>;
}
