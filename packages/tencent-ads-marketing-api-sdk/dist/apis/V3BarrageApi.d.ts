import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BarrageAddRequest, BarrageAddResponseData, BarrageGetResponseData } from "../models";
export interface V3BarrageApiAddRequest {
    data: BarrageAddRequest;
}
export interface V3BarrageApiGetRequest {
    accountId: number | string;
    idList?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3BarrageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BarrageApiAddRequest): Promise<BarrageAddResponseData>;
    addWithHttpInfo(request: V3BarrageApiAddRequest): Promise<ApiResponse<BarrageAddResponseData>>;
    get(request: V3BarrageApiGetRequest): Promise<BarrageGetResponseData>;
    getWithHttpInfo(request: V3BarrageApiGetRequest): Promise<ApiResponse<BarrageGetResponseData>>;
}
