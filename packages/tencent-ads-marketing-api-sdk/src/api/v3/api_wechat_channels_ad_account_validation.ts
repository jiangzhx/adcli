// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wechat_channels_ad_account_validation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountValidationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WechatChannelsAdAccountValidationApiGetRequest {
  accountId: number | string;
  nickname?: string;
  headImageId?: string;
  wechatChannelsAccountId?: string;
  fields?: unknown;
}


export class WechatChannelsAdAccountValidationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatChannelsAdAccountValidationApiGetRequest): Promise<WechatChannelsAdAccountValidationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatChannelsAdAccountValidationApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountValidationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountValidationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wechat_channels_ad_account_validation/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "nickname", value: request.nickname },
        { name: "head_image_id", value: request.headImageId },
        { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


