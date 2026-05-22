// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_channels_livenoticeinfo.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChannelsLivenoticeinfoGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ChannelsLivenoticeinfoApiGetRequest {
  accountId: number | string;
  finderUsername?: string;
  nickname?: string;
  wechatChannelsAccountId?: string;
  fields?: unknown;
}


export class ChannelsLivenoticeinfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ChannelsLivenoticeinfoApiGetRequest): Promise<ChannelsLivenoticeinfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ChannelsLivenoticeinfoApiGetRequest): Promise<ApiResponse<ChannelsLivenoticeinfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ChannelsLivenoticeinfoGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


