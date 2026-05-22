import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedGetRequest, ProgrammedGetResponseData } from "../../model/v3/index";
export interface ProgrammedApiGetRequest {
    data: ProgrammedGetRequest;
}
export declare class ProgrammedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData>;
    getWithHttpInfo(request: ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>>;
}
