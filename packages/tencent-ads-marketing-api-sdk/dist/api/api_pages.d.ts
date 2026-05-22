import { ApiClient, type ApiResponse } from "./client";
import type { PagesGetResponseData } from "../model/index";
export interface PagesApiGetRequest {
    accountId: number | string;
    promotedObjectType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
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
