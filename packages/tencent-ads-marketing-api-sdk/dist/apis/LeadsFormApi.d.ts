import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsFormAddRequest, LeadsFormAddResponseData, LeadsFormGetResponseData } from "../models";
export interface LeadsFormApiAddRequest {
    data: LeadsFormAddRequest;
}
export interface LeadsFormApiGetRequest {
    accountId: number | string;
    componentId: string;
    fields?: unknown;
}
export declare class LeadsFormApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: LeadsFormApiAddRequest): Promise<LeadsFormAddResponseData>;
    addWithHttpInfo(request: LeadsFormApiAddRequest): Promise<ApiResponse<LeadsFormAddResponseData>>;
    get(request: LeadsFormApiGetRequest): Promise<LeadsFormGetResponseData>;
    getWithHttpInfo(request: LeadsFormApiGetRequest): Promise<ApiResponse<LeadsFormGetResponseData>>;
}
