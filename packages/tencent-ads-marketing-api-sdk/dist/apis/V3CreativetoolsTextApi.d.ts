import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativetoolsTextGetResponseData } from "../models";
export interface V3CreativetoolsTextApiGetRequest {
    accountId: number | string;
    maxTextLength: number;
    adgroupId?: number | string;
    keyword?: string;
    filtering?: unknown;
    number?: number;
    categoryFirstLevel?: number;
    categorySecondLevel?: number;
    productCatalogId?: number | string;
    productOuterIds?: unknown;
    fields?: unknown;
}
export declare class V3CreativetoolsTextApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CreativetoolsTextApiGetRequest): Promise<CreativetoolsTextGetResponseData>;
    getWithHttpInfo(request: V3CreativetoolsTextApiGetRequest): Promise<ApiResponse<CreativetoolsTextGetResponseData>>;
}
