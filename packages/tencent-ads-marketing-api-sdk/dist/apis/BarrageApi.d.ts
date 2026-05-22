import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BarrageAddRequest, BarrageAddResponseData, BarrageGetResponseData } from "../models";
export interface BarrageApiAddRequest {
    data: BarrageAddRequest;
}
export interface BarrageApiGetRequest {
    accountId: number | string;
    idList?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class BarrageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BarrageApiAddRequest): Promise<BarrageAddResponseData>;
    addWithHttpInfo(request: BarrageApiAddRequest): Promise<ApiResponse<BarrageAddResponseData>>;
    get(request: BarrageApiGetRequest): Promise<BarrageGetResponseData>;
    getWithHttpInfo(request: BarrageApiGetRequest): Promise<ApiResponse<BarrageGetResponseData>>;
}
