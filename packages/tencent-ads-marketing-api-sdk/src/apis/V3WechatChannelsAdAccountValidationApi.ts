// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountValidationGetResponseData } from "../models";

export interface V3WechatChannelsAdAccountValidationApiGetRequest {
  accountId: number | string;
  nickname?: string;
  headImageId?: string;
  wechatChannelsAccountId?: string;
  fields?: unknown;
}


export class V3WechatChannelsAdAccountValidationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatChannelsAdAccountValidationApiGetRequest): Promise<WechatChannelsAdAccountValidationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatChannelsAdAccountValidationApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountValidationGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatChannelsAdAccountValidationGetResponseData>({
      method: "GET",
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


