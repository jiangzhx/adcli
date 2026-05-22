import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdVideoTemplatesGetResponseData } from "../models";
export interface V3DynamicAdVideoTemplatesApiGetRequest {
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
export declare class V3DynamicAdVideoTemplatesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DynamicAdVideoTemplatesApiGetRequest): Promise<DynamicAdVideoTemplatesGetResponseData>;
    getWithHttpInfo(request: V3DynamicAdVideoTemplatesApiGetRequest): Promise<ApiResponse<DynamicAdVideoTemplatesGetResponseData>>;
}
