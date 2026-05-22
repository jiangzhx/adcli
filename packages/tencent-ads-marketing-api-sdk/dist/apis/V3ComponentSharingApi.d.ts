import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentSharingGetResponseData, ComponentSharingUpdateRequest, ComponentSharingUpdateResponseData } from "../models";
export interface V3ComponentSharingApiGetRequest {
    organizationId: number | string;
    componentId?: number | string;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
}
export interface V3ComponentSharingApiUpdateRequest {
    data: ComponentSharingUpdateRequest;
}
export declare class V3ComponentSharingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ComponentSharingApiGetRequest): Promise<ComponentSharingGetResponseData>;
    getWithHttpInfo(request: V3ComponentSharingApiGetRequest): Promise<ApiResponse<ComponentSharingGetResponseData>>;
    update(request: V3ComponentSharingApiUpdateRequest): Promise<ComponentSharingUpdateResponseData>;
    updateWithHttpInfo(request: V3ComponentSharingApiUpdateRequest): Promise<ApiResponse<ComponentSharingUpdateResponseData>>;
}
