import { ApiClient, type ApiResponse } from "./client";
import type { CreativetoolsTextGetResponseData } from "../../model/v3/index";
export interface CreativetoolsTextApiGetRequest {
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
export declare class CreativetoolsTextApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativetoolsTextApiGetRequest): Promise<CreativetoolsTextGetResponseData>;
    getWithHttpInfo(request: CreativetoolsTextApiGetRequest): Promise<ApiResponse<CreativetoolsTextGetResponseData>>;
}
