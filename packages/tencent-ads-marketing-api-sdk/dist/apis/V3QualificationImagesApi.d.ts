import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationImagesAddResponseData, QualificationImagesGetResponseData } from "../models";
export interface V3QualificationImagesApiAddRequest {
    accountId: number | string;
    signature: string;
    file: Blob;
}
export interface V3QualificationImagesApiGetRequest {
    accountId: number | string;
    imageIds: string[];
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class V3QualificationImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3QualificationImagesApiAddRequest): Promise<QualificationImagesAddResponseData>;
    addWithHttpInfo(request: V3QualificationImagesApiAddRequest): Promise<ApiResponse<QualificationImagesAddResponseData>>;
    get(request: V3QualificationImagesApiGetRequest): Promise<QualificationImagesGetResponseData>;
    getWithHttpInfo(request: V3QualificationImagesApiGetRequest): Promise<ApiResponse<QualificationImagesGetResponseData>>;
}
