import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageInteractiveAddResponseData } from "../models";
export interface V3XijingPageInteractiveApiAddRequest {
    accountId: number | string;
    isAutoSubmit: number;
    pageType: string;
    interactivePageType: string;
    pageTitle: string;
    pageName: string;
    mobileAppId: string;
    file?: Blob;
    transformType?: string;
    pageConfig?: string;
}
export declare class V3XijingPageInteractiveApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3XijingPageInteractiveApiAddRequest): Promise<XijingPageInteractiveAddResponseData>;
    addWithHttpInfo(request: V3XijingPageInteractiveApiAddRequest): Promise<ApiResponse<XijingPageInteractiveAddResponseData>>;
}
