import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingTemplateListGetResponseData } from "../models";
export interface V3XijingTemplateListApiGetRequest {
    accountId: number | string;
    pageTemplateId: string;
    isInteraction?: boolean;
    isPublic?: boolean;
    templateSource?: string;
    pageSize?: number;
    page?: number;
    fields?: unknown;
}
export declare class V3XijingTemplateListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3XijingTemplateListApiGetRequest): Promise<XijingTemplateListGetResponseData>;
    getWithHttpInfo(request: V3XijingTemplateListApiGetRequest): Promise<ApiResponse<XijingTemplateListGetResponseData>>;
}
