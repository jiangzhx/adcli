import { ApiClient, type ApiResponse } from "./client";
import type { LabelsGetResponseData } from "../../model/v3/index";
export interface LabelsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class LabelsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LabelsApiGetRequest): Promise<LabelsGetResponseData>;
    getWithHttpInfo(request: LabelsApiGetRequest): Promise<ApiResponse<LabelsGetResponseData>>;
}
