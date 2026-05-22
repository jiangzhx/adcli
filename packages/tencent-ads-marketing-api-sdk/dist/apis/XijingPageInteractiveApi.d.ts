import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface XijingPageInteractiveApiAddRequest {
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
export declare class XijingPageInteractiveApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: XijingPageInteractiveApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: XijingPageInteractiveApiAddRequest): Promise<ApiResponse<unknown>>;
}
