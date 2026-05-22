import { ApiClient, type ApiResponse } from "./client";
import type { XijingPageInteractiveAddResponseData } from "../../model/v3/index";
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
    add(request: XijingPageInteractiveApiAddRequest): Promise<XijingPageInteractiveAddResponseData>;
    addWithHttpInfo(request: XijingPageInteractiveApiAddRequest): Promise<ApiResponse<XijingPageInteractiveAddResponseData>>;
}
