import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessManagerRelationsGetResponseData } from "../models";
export interface BusinessManagerRelationsApiGetRequest {
    page?: number;
    pageSize?: number;
    advertiserType?: number;
    fields?: unknown;
}
export declare class BusinessManagerRelationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessManagerRelationsApiGetRequest): Promise<BusinessManagerRelationsGetResponseData>;
    getWithHttpInfo(request: BusinessManagerRelationsApiGetRequest): Promise<ApiResponse<BusinessManagerRelationsGetResponseData>>;
}
