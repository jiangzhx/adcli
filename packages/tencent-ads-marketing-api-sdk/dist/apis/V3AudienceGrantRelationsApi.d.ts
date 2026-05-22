import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AudienceGrantRelationsAddRequest, AudienceGrantRelationsGetResponseData } from "../models";
export interface V3AudienceGrantRelationsApiAddRequest {
    data: AudienceGrantRelationsAddRequest;
}
export interface V3AudienceGrantRelationsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3AudienceGrantRelationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AudienceGrantRelationsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3AudienceGrantRelationsApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: V3AudienceGrantRelationsApiGetRequest): Promise<AudienceGrantRelationsGetResponseData>;
    getWithHttpInfo(request: V3AudienceGrantRelationsApiGetRequest): Promise<ApiResponse<AudienceGrantRelationsGetResponseData>>;
}
