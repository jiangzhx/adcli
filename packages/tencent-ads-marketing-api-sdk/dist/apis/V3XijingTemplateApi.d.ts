import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingTemplateGetResponseData } from "../models";
export interface V3XijingTemplateApiGetRequest {
    accountId: number | string;
    templateId: string;
    fields?: unknown;
}
export declare class V3XijingTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3XijingTemplateApiGetRequest): Promise<XijingTemplateGetResponseData>;
    getWithHttpInfo(request: V3XijingTemplateApiGetRequest): Promise<ApiResponse<XijingTemplateGetResponseData>>;
}
