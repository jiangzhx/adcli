import { ApiClient, type ApiResponse } from "./client";
import type { OrganizationAccountRelationGetResponseData } from "../../model/v3/index";
export interface OrganizationAccountRelationApiGetRequest {
    paginationMode: string;
    accountId?: number | string;
    advertiserType?: string;
    businessUnitId?: number | string;
    cursor?: number;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class OrganizationAccountRelationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: OrganizationAccountRelationApiGetRequest): Promise<OrganizationAccountRelationGetResponseData>;
    getWithHttpInfo(request: OrganizationAccountRelationApiGetRequest): Promise<ApiResponse<OrganizationAccountRelationGetResponseData>>;
}
