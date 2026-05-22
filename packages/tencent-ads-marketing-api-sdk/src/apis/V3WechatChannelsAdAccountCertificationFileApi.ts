// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountCertificationFileAddRequest, WechatChannelsAdAccountCertificationFileAddResponseData } from "../models";

export interface V3WechatChannelsAdAccountCertificationFileApiAddRequest {
  data: WechatChannelsAdAccountCertificationFileAddRequest;
}


export class V3WechatChannelsAdAccountCertificationFileApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<WechatChannelsAdAccountCertificationFileAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountCertificationFileAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountCertificationFileAddResponseData>({
      method: "POST",
      path: "/wechat_channels_ad_account_certification_file/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


