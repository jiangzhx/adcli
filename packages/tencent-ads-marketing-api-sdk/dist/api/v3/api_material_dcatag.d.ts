import { ApiClient, type ApiResponse } from "./client";
import type { MaterialDcatagAddRequest, MaterialDcatagAddResponseData, MaterialDcatagGetResponseData } from "../../model/v3/index";
export interface MaterialDcatagApiAddRequest {
    data: MaterialDcatagAddRequest;
}
export interface MaterialDcatagApiGetRequest {
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
export declare class MaterialDcatagApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: MaterialDcatagApiAddRequest): Promise<MaterialDcatagAddResponseData>;
    addWithHttpInfo(request: MaterialDcatagApiAddRequest): Promise<ApiResponse<MaterialDcatagAddResponseData>>;
    get(request: MaterialDcatagApiGetRequest): Promise<MaterialDcatagGetResponseData>;
    getWithHttpInfo(request: MaterialDcatagApiGetRequest): Promise<ApiResponse<MaterialDcatagGetResponseData>>;
}
