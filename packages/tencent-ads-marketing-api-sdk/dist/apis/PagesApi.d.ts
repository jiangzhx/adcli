import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PagesGetResponseData } from "../models";
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
