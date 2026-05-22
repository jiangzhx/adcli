import { ApiClient, type ApiResponse } from "./client";
import type { DynamicAdVideoTemplatesGetResponseData } from "../model/index";
export interface DynamicAdVideoTemplatesApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    adcreativeTemplateId: number | string;
    productMode: string;
    supportChannel?: boolean;
    page?: number;
    pageSize?: number;
    templateIdList?: unknown;
    templateName?: string;
    dynamicAdTemplateOwnershipType?: string;
    fields?: unknown;
}
export declare class DynamicAdVideoTemplatesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DynamicAdVideoTemplatesApiGetRequest): Promise<DynamicAdVideoTemplatesGetResponseData>;
    getWithHttpInfo(request: DynamicAdVideoTemplatesApiGetRequest): Promise<ApiResponse<DynamicAdVideoTemplatesGetResponseData>>;
}
