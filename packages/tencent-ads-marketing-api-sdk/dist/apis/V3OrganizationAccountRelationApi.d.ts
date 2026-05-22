import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OrganizationAccountRelationGetResponseData } from "../models";
export interface V3OrganizationAccountRelationApiGetRequest {
    paginationMode: string;
    accountId?: number | string;
    advertiserType?: string;
    businessUnitId?: number | string;
    cursor?: number;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3OrganizationAccountRelationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3OrganizationAccountRelationApiGetRequest): Promise<OrganizationAccountRelationGetResponseData>;
    getWithHttpInfo(request: V3OrganizationAccountRelationApiGetRequest): Promise<ApiResponse<OrganizationAccountRelationGetResponseData>>;
}
