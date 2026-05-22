import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionsAddRequest, ConversionsAddResponseData, ConversionsGetResponseData } from "../models";
export interface V3ConversionsApiAddRequest {
    data: ConversionsAddRequest;
}
export interface V3ConversionsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3ConversionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ConversionsApiAddRequest): Promise<ConversionsAddResponseData>;
    addWithHttpInfo(request: V3ConversionsApiAddRequest): Promise<ApiResponse<ConversionsAddResponseData>>;
    get(request: V3ConversionsApiGetRequest): Promise<ConversionsGetResponseData>;
    getWithHttpInfo(request: V3ConversionsApiGetRequest): Promise<ApiResponse<ConversionsGetResponseData>>;
}
