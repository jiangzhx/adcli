import { ApiClient, type ApiResponse } from "./client";
import type { BusinessMdmAccountRelationsGetResponseData } from "../model/index";
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
