// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsLivenoticeinfoGetResponseData } from "../models";

export interface V3ChannelsLivenoticeinfoApiGetRequest {
  accountId: number | string;
  finderUsername?: string;
  nickname?: string;
  wechatChannelsAccountId?: string;
  fields?: unknown;
}


export class V3ChannelsLivenoticeinfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ChannelsLivenoticeinfoApiGetRequest): Promise<ChannelsLivenoticeinfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ChannelsLivenoticeinfoApiGetRequest): Promise<ApiResponse<ChannelsLivenoticeinfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ChannelsLivenoticeinfoGetResponseData>({
      method: "GET",
      path: "/channels_livenoticeinfo/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "finder_username", value: request.finderUsername },
        { name: "nickname", value: request.nickname },
        { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


