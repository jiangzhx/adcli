import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdImageTemplatesGetResponseData } from "../models";
export interface V3DynamicAdImageTemplatesApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productMode: string;
    dynamicAdTemplateWidth: number;
    dynamicAdTemplateHeight: number;
    dynamicAdTemplateOwnershipType?: string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    templateIdList?: unknown;
    templateName?: string;
    fields?: unknown;
}
export declare class V3DynamicAdImageTemplatesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DynamicAdImageTemplatesApiGetRequest): Promise<DynamicAdImageTemplatesGetResponseData>;
    getWithHttpInfo(request: V3DynamicAdImageTemplatesApiGetRequest): Promise<ApiResponse<DynamicAdImageTemplatesGetResponseData>>;
}
