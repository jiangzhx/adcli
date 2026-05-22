import { ApiClient, type ApiResponse } from "./client";
import type { DateRange, EcommerceOrderGetResponseData, EcommerceOrderUpdateRequest } from "../model/index";
export interface EcommerceOrderApiGetRequest {
    accountId: number | string;
    dateRange: DateRange;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface EcommerceOrderApiUpdateRequest {
    data: EcommerceOrderUpdateRequest;
}
export declare class EcommerceOrderApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: EcommerceOrderApiGetRequest): Promise<EcommerceOrderGetResponseData>;
    getWithHttpInfo(request: EcommerceOrderApiGetRequest): Promise<ApiResponse<EcommerceOrderGetResponseData>>;
    update(request: EcommerceOrderApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: EcommerceOrderApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
