import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface PropertyFilesApiAddRequest {
    accountId: number | string;
    propertySetId: number | string;
    sessionId: number | string;
    fileName: string;
    file: Blob;
}
export declare class PropertyFilesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: PropertyFilesApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: PropertyFilesApiAddRequest): Promise<ApiResponse<unknown>>;
}
