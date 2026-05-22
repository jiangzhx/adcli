import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PropertySetSchemasAddRequest, PropertySetSchemasGetResponseData, PropertySetSchemasUpdateRequest } from "../models";
export interface PropertySetSchemasApiAddRequest {
    data: PropertySetSchemasAddRequest;
}
export interface PropertySetSchemasApiGetRequest {
    accountId: number | string;
    propertySetId: number | string;
    fields?: unknown;
}
export interface PropertySetSchemasApiUpdateRequest {
    data: PropertySetSchemasUpdateRequest;
}
export declare class PropertySetSchemasApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PropertySetSchemasApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: PropertySetSchemasApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: PropertySetSchemasApiGetRequest): Promise<PropertySetSchemasGetResponseData>;
    getWithHttpInfo(request: PropertySetSchemasApiGetRequest): Promise<ApiResponse<PropertySetSchemasGetResponseData>>;
    update(request: PropertySetSchemasApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: PropertySetSchemasApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
