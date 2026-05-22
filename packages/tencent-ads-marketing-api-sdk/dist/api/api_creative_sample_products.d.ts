import { ApiClient, type ApiResponse } from "./client";
import type { CreativeSampleProductsGetResponseData } from "../model/index";
export interface CreativeSampleProductsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productOuterIds?: unknown;
    productSeriesId?: number | string;
    templateId?: number | string;
    templateType?: string;
    imageId?: string;
    videoId?: string;
    productFields?: unknown;
    limit?: number;
    fields?: unknown;
}
export declare class CreativeSampleProductsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativeSampleProductsApiGetRequest): Promise<CreativeSampleProductsGetResponseData>;
    getWithHttpInfo(request: CreativeSampleProductsApiGetRequest): Promise<ApiResponse<CreativeSampleProductsGetResponseData>>;
}
