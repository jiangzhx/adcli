import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedAddRequest, ProgrammedAddResponseData, ProgrammedGetRequest, ProgrammedGetResponseData, ProgrammedUpdateRequest, ProgrammedUpdateResponseData } from "../model/index";
export interface ProgrammedApiAddRequest {
    data: ProgrammedAddRequest;
}
export interface ProgrammedApiGetRequest {
    data: ProgrammedGetRequest;
}
export interface ProgrammedApiUpdateRequest {
    data: ProgrammedUpdateRequest;
}
export declare class ProgrammedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProgrammedApiAddRequest): Promise<ProgrammedAddResponseData>;
    addWithHttpInfo(request: ProgrammedApiAddRequest): Promise<ApiResponse<ProgrammedAddResponseData>>;
    get(request: ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData>;
    getWithHttpInfo(request: ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>>;
    update(request: ProgrammedApiUpdateRequest): Promise<ProgrammedUpdateResponseData>;
    updateWithHttpInfo(request: ProgrammedApiUpdateRequest): Promise<ApiResponse<ProgrammedUpdateResponseData>>;
}
