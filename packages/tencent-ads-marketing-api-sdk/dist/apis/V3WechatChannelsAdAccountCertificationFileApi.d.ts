import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountCertificationFileAddRequest, WechatChannelsAdAccountCertificationFileAddResponseData } from "../models";
export interface V3WechatChannelsAdAccountCertificationFileApiAddRequest {
    data: WechatChannelsAdAccountCertificationFileAddRequest;
}
export declare class V3WechatChannelsAdAccountCertificationFileApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<WechatChannelsAdAccountCertificationFileAddResponseData>;
    addWithHttpInfo(request: V3WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountCertificationFileAddResponseData>>;
}
