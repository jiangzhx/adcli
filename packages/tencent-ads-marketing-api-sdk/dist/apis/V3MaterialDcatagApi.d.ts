import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialDcatagAddRequest, MaterialDcatagAddResponseData, MaterialDcatagGetResponseData } from "../models";
export interface V3MaterialDcatagApiAddRequest {
    data: MaterialDcatagAddRequest;
}
export interface V3MaterialDcatagApiGetRequest {
    accountId?: number | string;
    imageIdList?: unknown;
    mediaIdList?: unknown;
    marketingAssetId?: number | string;
    marketingTargetType?: string;
    marketingAssetOuterSpec?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3MaterialDcatagApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3MaterialDcatagApiAddRequest): Promise<MaterialDcatagAddResponseData>;
    addWithHttpInfo(request: V3MaterialDcatagApiAddRequest): Promise<ApiResponse<MaterialDcatagAddResponseData>>;
    get(request: V3MaterialDcatagApiGetRequest): Promise<MaterialDcatagGetResponseData>;
    getWithHttpInfo(request: V3MaterialDcatagApiGetRequest): Promise<ApiResponse<MaterialDcatagGetResponseData>>;
}
