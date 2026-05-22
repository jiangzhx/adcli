import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedCommponentResultGetResponseData } from "../../model/v3/index";
export interface ProgrammedCommponentResultApiGetRequest {
    accountId: number | string;
    materialDeriveId: number | string;
    fields?: unknown;
}
export declare class ProgrammedCommponentResultApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProgrammedCommponentResultApiGetRequest): Promise<ProgrammedCommponentResultGetResponseData>;
    getWithHttpInfo(request: ProgrammedCommponentResultApiGetRequest): Promise<ApiResponse<ProgrammedCommponentResultGetResponseData>>;
}
