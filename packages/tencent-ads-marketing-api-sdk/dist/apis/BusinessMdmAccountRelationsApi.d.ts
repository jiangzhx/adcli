import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessMdmAccountRelationsGetResponseData } from "../models";
export interface BusinessMdmAccountRelationsApiGetRequest {
    accountId: number | string;
    relationType: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class BusinessMdmAccountRelationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: BusinessMdmAccountRelationsApiGetRequest): Promise<BusinessMdmAccountRelationsGetResponseData>;
    getWithHttpInfo(request: BusinessMdmAccountRelationsApiGetRequest): Promise<ApiResponse<BusinessMdmAccountRelationsGetResponseData>>;
}
