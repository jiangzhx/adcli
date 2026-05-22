import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsVoipCallTokenGetResponseData } from "../models";
export interface V3LeadsVoipCallTokenApiGetRequest {
    accountId: number | string;
    userId: number | string;
    requestId?: string;
    fields?: unknown;
}
export declare class V3LeadsVoipCallTokenApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LeadsVoipCallTokenApiGetRequest): Promise<LeadsVoipCallTokenGetResponseData>;
    getWithHttpInfo(request: V3LeadsVoipCallTokenApiGetRequest): Promise<ApiResponse<LeadsVoipCallTokenGetResponseData>>;
}
