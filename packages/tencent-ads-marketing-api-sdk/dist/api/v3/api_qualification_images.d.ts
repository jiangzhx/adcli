import { ApiClient, type ApiResponse } from "./client";
import type { QualificationImagesAddResponseData, QualificationImagesGetResponseData } from "../../model/v3/index";
export interface QualificationImagesApiAddRequest {
    accountId: number | string;
    signature: string;
    file: Blob;
}
export interface QualificationImagesApiGetRequest {
    accountId: number | string;
    imageIds: string[];
    page: number;
    pageSize: number;
    fields?: unknown;
}
export declare class QualificationImagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: QualificationImagesApiAddRequest): Promise<QualificationImagesAddResponseData>;
    addWithHttpInfo(request: QualificationImagesApiAddRequest): Promise<ApiResponse<QualificationImagesAddResponseData>>;
    get(request: QualificationImagesApiGetRequest): Promise<QualificationImagesGetResponseData>;
    getWithHttpInfo(request: QualificationImagesApiGetRequest): Promise<ApiResponse<QualificationImagesGetResponseData>>;
}
