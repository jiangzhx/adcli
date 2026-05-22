import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationStructureGetResponseData } from "../models";
export interface V3QualificationStructureApiGetRequest {
    accountId: number | string;
    qualificationCode: string;
    fields?: unknown;
}
export declare class V3QualificationStructureApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3QualificationStructureApiGetRequest): Promise<QualificationStructureGetResponseData>;
    getWithHttpInfo(request: V3QualificationStructureApiGetRequest): Promise<ApiResponse<QualificationStructureGetResponseData>>;
}
