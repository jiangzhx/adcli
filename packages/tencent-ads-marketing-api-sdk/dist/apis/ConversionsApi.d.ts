import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionsAddRequest, ConversionsAddResponseData, ConversionsGetResponseData } from "../models";
export interface ConversionsApiAddRequest {
    data: ConversionsAddRequest;
}
export interface ConversionsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class ConversionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ConversionsApiAddRequest): Promise<ConversionsAddResponseData>;
    addWithHttpInfo(request: ConversionsApiAddRequest): Promise<ApiResponse<ConversionsAddResponseData>>;
    get(request: ConversionsApiGetRequest): Promise<ConversionsGetResponseData>;
    getWithHttpInfo(request: ConversionsApiGetRequest): Promise<ApiResponse<ConversionsGetResponseData>>;
}
