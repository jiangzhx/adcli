import { ApiClient, type ApiResponse } from "./client";
import type { XijingTemplateGetResponseData } from "../model/index";
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
