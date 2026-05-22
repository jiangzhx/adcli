import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingTemplateListGetResponseData } from "../models";
export interface XijingTemplateListApiGetRequest {
    accountId: number | string;
    pageTemplateId: string;
    isInteraction?: boolean;
    isPublic?: boolean;
    templateSource?: string;
    pageSize?: number;
    page?: number;
    fields?: unknown;
}
export declare class XijingTemplateListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: XijingTemplateListApiGetRequest): Promise<XijingTemplateListGetResponseData>;
    getWithHttpInfo(request: XijingTemplateListApiGetRequest): Promise<ApiResponse<XijingTemplateListGetResponseData>>;
}
