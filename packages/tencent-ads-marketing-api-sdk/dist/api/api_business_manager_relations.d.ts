import { ApiClient, type ApiResponse } from "./client";
import type { BusinessManagerRelationsGetResponseData } from "../model/index";
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
