import { ApiClient, type ApiResponse } from "./client";
import type { AudienceGrantRelationsAddRequest, AudienceGrantRelationsGetResponseData } from "../../model/v3/index";
export interface AudienceGrantRelationsApiAddRequest {
    data: AudienceGrantRelationsAddRequest;
}
export interface AudienceGrantRelationsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class AudienceGrantRelationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AudienceGrantRelationsApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: AudienceGrantRelationsApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: AudienceGrantRelationsApiGetRequest): Promise<AudienceGrantRelationsGetResponseData>;
    getWithHttpInfo(request: AudienceGrantRelationsApiGetRequest): Promise<ApiResponse<AudienceGrantRelationsGetResponseData>>;
}
