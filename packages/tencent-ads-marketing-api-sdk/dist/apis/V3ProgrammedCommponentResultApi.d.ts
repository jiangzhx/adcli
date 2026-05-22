import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentResultGetResponseData } from "../models";
export interface V3ProgrammedCommponentResultApiGetRequest {
    accountId: number | string;
    materialDeriveId: number | string;
    fields?: unknown;
}
export declare class V3ProgrammedCommponentResultApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProgrammedCommponentResultApiGetRequest): Promise<ProgrammedCommponentResultGetResponseData>;
    getWithHttpInfo(request: V3ProgrammedCommponentResultApiGetRequest): Promise<ApiResponse<ProgrammedCommponentResultGetResponseData>>;
}
