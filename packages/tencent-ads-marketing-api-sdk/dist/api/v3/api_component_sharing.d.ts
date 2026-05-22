import { ApiClient, type ApiResponse } from "./client";
import type { ComponentSharingGetResponseData, ComponentSharingUpdateRequest, ComponentSharingUpdateResponseData } from "../../model/v3/index";
export interface ComponentSharingApiGetRequest {
    organizationId: number | string;
    componentId?: number | string;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
}
export interface ComponentSharingApiUpdateRequest {
    data: ComponentSharingUpdateRequest;
}
export declare class ComponentSharingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComponentSharingApiGetRequest): Promise<ComponentSharingGetResponseData>;
    getWithHttpInfo(request: ComponentSharingApiGetRequest): Promise<ApiResponse<ComponentSharingGetResponseData>>;
    update(request: ComponentSharingApiUpdateRequest): Promise<ComponentSharingUpdateResponseData>;
    updateWithHttpInfo(request: ComponentSharingApiUpdateRequest): Promise<ApiResponse<ComponentSharingUpdateResponseData>>;
}
