import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentPreviewAddRequest, ProgrammedCommponentPreviewAddResponseData, ProgrammedCommponentPreviewDeleteRequest, ProgrammedCommponentPreviewDeleteResponseData, ProgrammedCommponentPreviewGetResponseData, ProgrammedCommponentPreviewUpdateRequest, ProgrammedCommponentPreviewUpdateResponseData } from "../models";
export interface V3ProgrammedCommponentPreviewApiAddRequest {
    data: ProgrammedCommponentPreviewAddRequest;
}
export interface V3ProgrammedCommponentPreviewApiDeleteRequest {
    data: ProgrammedCommponentPreviewDeleteRequest;
}
export interface V3ProgrammedCommponentPreviewApiGetRequest {
    accountId: number | string;
    materialDeriveId: number | string;
    fields?: unknown;
}
export interface V3ProgrammedCommponentPreviewApiUpdateRequest {
    data: ProgrammedCommponentPreviewUpdateRequest;
}
export declare class V3ProgrammedCommponentPreviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ProgrammedCommponentPreviewApiAddRequest): Promise<ProgrammedCommponentPreviewAddResponseData>;
    addWithHttpInfo(request: V3ProgrammedCommponentPreviewApiAddRequest): Promise<ApiResponse<ProgrammedCommponentPreviewAddResponseData>>;
    delete(request: V3ProgrammedCommponentPreviewApiDeleteRequest): Promise<ProgrammedCommponentPreviewDeleteResponseData>;
    deleteWithHttpInfo(request: V3ProgrammedCommponentPreviewApiDeleteRequest): Promise<ApiResponse<ProgrammedCommponentPreviewDeleteResponseData>>;
    get(request: V3ProgrammedCommponentPreviewApiGetRequest): Promise<ProgrammedCommponentPreviewGetResponseData>;
    getWithHttpInfo(request: V3ProgrammedCommponentPreviewApiGetRequest): Promise<ApiResponse<ProgrammedCommponentPreviewGetResponseData>>;
    update(request: V3ProgrammedCommponentPreviewApiUpdateRequest): Promise<ProgrammedCommponentPreviewUpdateResponseData>;
    updateWithHttpInfo(request: V3ProgrammedCommponentPreviewApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewUpdateResponseData>>;
}
