import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LabelsGetResponseData } from "../models";
export interface V3LabelsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3LabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LabelsApiGetRequest): Promise<LabelsGetResponseData>;
    getWithHttpInfo(request: V3LabelsApiGetRequest): Promise<ApiResponse<LabelsGetResponseData>>;
}
