import { ApiClient, type ApiResponse } from "./client";
import type { QualificationStructureGetResponseData } from "../../model/v3/index";
export interface QualificationStructureApiGetRequest {
    accountId: number | string;
    qualificationCode: string;
    fields?: unknown;
}
export declare class QualificationStructureApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: QualificationStructureApiGetRequest): Promise<QualificationStructureGetResponseData>;
    getWithHttpInfo(request: QualificationStructureApiGetRequest): Promise<ApiResponse<QualificationStructureGetResponseData>>;
}
