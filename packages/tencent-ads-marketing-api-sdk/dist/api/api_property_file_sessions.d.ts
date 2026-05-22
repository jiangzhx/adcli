import { ApiClient, type ApiResponse } from "./client";
import type { PropertyFileSessionsAddRequest, PropertyFileSessionsAddResponseData, PropertyFileSessionsUpdateRequest, PropertyFileSessionsUpdateResponseData } from "../model/index";
export interface PropertyFileSessionsApiAddRequest {
    data: PropertyFileSessionsAddRequest;
}
export interface PropertyFileSessionsApiUpdateRequest {
    data: PropertyFileSessionsUpdateRequest;
}
export declare class PropertyFileSessionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PropertyFileSessionsApiAddRequest): Promise<PropertyFileSessionsAddResponseData>;
    addWithHttpInfo(request: PropertyFileSessionsApiAddRequest): Promise<ApiResponse<PropertyFileSessionsAddResponseData>>;
    update(request: PropertyFileSessionsApiUpdateRequest): Promise<PropertyFileSessionsUpdateResponseData>;
    updateWithHttpInfo(request: PropertyFileSessionsApiUpdateRequest): Promise<ApiResponse<PropertyFileSessionsUpdateResponseData>>;
}
