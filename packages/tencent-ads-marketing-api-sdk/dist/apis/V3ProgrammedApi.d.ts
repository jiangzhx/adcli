import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedGetRequest, ProgrammedGetResponseData } from "../models";
export interface V3ProgrammedApiGetRequest {
    data: ProgrammedGetRequest;
}
export declare class V3ProgrammedApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData>;
    getWithHttpInfo(request: V3ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>>;
}
