import { ApiClient, type ApiResponse } from "./client";
import type { PropertySetsAddRequest, PropertySetsAddResponseData, PropertySetsGetResponseData } from "../model/index";
export interface PropertySetsApiAddRequest {
    data: PropertySetsAddRequest;
}
export interface PropertySetsApiGetRequest {
    accountId: number | string;
    propertySetId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class PropertySetsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PropertySetsApiAddRequest): Promise<PropertySetsAddResponseData>;
    addWithHttpInfo(request: PropertySetsApiAddRequest): Promise<ApiResponse<PropertySetsAddResponseData>>;
    get(request: PropertySetsApiGetRequest): Promise<PropertySetsGetResponseData>;
    getWithHttpInfo(request: PropertySetsApiGetRequest): Promise<ApiResponse<PropertySetsGetResponseData>>;
}
