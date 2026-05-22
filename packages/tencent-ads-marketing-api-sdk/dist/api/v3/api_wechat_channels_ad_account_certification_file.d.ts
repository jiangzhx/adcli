import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountCertificationFileAddRequest, WechatChannelsAdAccountCertificationFileAddResponseData } from "../../model/v3/index";
export interface WechatChannelsAdAccountCertificationFileApiAddRequest {
    data: WechatChannelsAdAccountCertificationFileAddRequest;
}
export declare class WechatChannelsAdAccountCertificationFileApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<WechatChannelsAdAccountCertificationFileAddResponseData>;
    addWithHttpInfo(request: WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountCertificationFileAddResponseData>>;
}
