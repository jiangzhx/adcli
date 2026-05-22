import { ApiClient, type ApiResponse } from "./client";
import type { ProgrammedCommponentPreviewAddRequest, ProgrammedCommponentPreviewAddResponseData, ProgrammedCommponentPreviewDeleteRequest, ProgrammedCommponentPreviewDeleteResponseData, ProgrammedCommponentPreviewGetResponseData, ProgrammedCommponentPreviewUpdateRequest, ProgrammedCommponentPreviewUpdateResponseData } from "../../model/v3/index";
export interface ProgrammedCommponentPreviewApiAddRequest {
    data: ProgrammedCommponentPreviewAddRequest;
}
export interface ProgrammedCommponentPreviewApiDeleteRequest {
    data: ProgrammedCommponentPreviewDeleteRequest;
}
export interface ProgrammedCommponentPreviewApiGetRequest {
    accountId: number | string;
    materialDeriveId: number | string;
    fields?: unknown;
}
export interface ProgrammedCommponentPreviewApiUpdateRequest {
    data: ProgrammedCommponentPreviewUpdateRequest;
}
export declare class ProgrammedCommponentPreviewApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProgrammedCommponentPreviewApiAddRequest): Promise<ProgrammedCommponentPreviewAddResponseData>;
    addWithHttpInfo(request: ProgrammedCommponentPreviewApiAddRequest): Promise<ApiResponse<ProgrammedCommponentPreviewAddResponseData>>;
    delete(request: ProgrammedCommponentPreviewApiDeleteRequest): Promise<ProgrammedCommponentPreviewDeleteResponseData>;
    deleteWithHttpInfo(request: ProgrammedCommponentPreviewApiDeleteRequest): Promise<ApiResponse<ProgrammedCommponentPreviewDeleteResponseData>>;
    get(request: ProgrammedCommponentPreviewApiGetRequest): Promise<ProgrammedCommponentPreviewGetResponseData>;
    getWithHttpInfo(request: ProgrammedCommponentPreviewApiGetRequest): Promise<ApiResponse<ProgrammedCommponentPreviewGetResponseData>>;
    update(request: ProgrammedCommponentPreviewApiUpdateRequest): Promise<ProgrammedCommponentPreviewUpdateResponseData>;
    updateWithHttpInfo(request: ProgrammedCommponentPreviewApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewUpdateResponseData>>;
}
