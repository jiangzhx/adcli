import { ApiClient, type ApiResponse } from "./client";
import type { XijingTemplateListGetResponseData } from "../../model/v3/index";
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
