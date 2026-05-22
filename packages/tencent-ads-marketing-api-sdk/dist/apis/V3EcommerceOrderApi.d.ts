import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DateRange, EcommerceOrderGetResponseData, EcommerceOrderUpdateRequest } from "../models";
export interface V3EcommerceOrderApiGetRequest {
    accountId: number | string;
    dateRange: DateRange;
    filtering?: unknown;
    date?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3EcommerceOrderApiUpdateRequest {
    data: EcommerceOrderUpdateRequest;
}
export declare class V3EcommerceOrderApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3EcommerceOrderApiGetRequest): Promise<EcommerceOrderGetResponseData>;
    getWithHttpInfo(request: V3EcommerceOrderApiGetRequest): Promise<ApiResponse<EcommerceOrderGetResponseData>>;
    update(request: V3EcommerceOrderApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3EcommerceOrderApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
