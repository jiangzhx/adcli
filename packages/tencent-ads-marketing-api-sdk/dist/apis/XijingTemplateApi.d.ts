import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingTemplateGetResponseData } from "../models";
export interface XijingTemplateApiGetRequest {
    accountId: number | string;
    templateId: string;
    fields?: unknown;
}
export declare class XijingTemplateApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: XijingTemplateApiGetRequest): Promise<XijingTemplateGetResponseData>;
    getWithHttpInfo(request: XijingTemplateApiGetRequest): Promise<ApiResponse<XijingTemplateGetResponseData>>;
}
