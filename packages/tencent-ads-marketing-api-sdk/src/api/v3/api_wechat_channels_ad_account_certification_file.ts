// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account_certification_file.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountCertificationFileAddRequest, WechatChannelsAdAccountCertificationFileAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatChannelsAdAccountCertificationFileApiAddRequest {
  data: WechatChannelsAdAccountCertificationFileAddRequest;
}


export class WechatChannelsAdAccountCertificationFileApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<WechatChannelsAdAccountCertificationFileAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WechatChannelsAdAccountCertificationFileApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountCertificationFileAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountCertificationFileAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account_certification_file/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


