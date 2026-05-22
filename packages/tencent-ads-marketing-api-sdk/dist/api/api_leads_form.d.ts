import { ApiClient, type ApiResponse } from "./client";
import type { LeadsFormAddRequest, LeadsFormAddResponseData, LeadsFormGetResponseData } from "../model/index";
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
