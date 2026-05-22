// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_channels_userpageobjects.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChannelsUserpageobjectsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ChannelsUserpageobjectsApiGetRequest {
  accountId: number | string;
  finderUsername?: string;
  nickname?: string;
  lastBuffer?: string;
  count?: number;
  wechatChannelsAccountId?: string;
  adContext?: unknown;
  fields?: unknown;
}


export class ChannelsUserpageobjectsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ChannelsUserpageobjectsApiGetRequest): Promise<ChannelsUserpageobjectsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ChannelsUserpageobjectsApiGetRequest): Promise<ApiResponse<ChannelsUserpageobjectsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ChannelsUserpageobjectsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/channels_userpageobjects/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "finder_username", value: request.finderUsername },
        { name: "nickname", value: request.nickname },
        { name: "last_buffer", value: request.lastBuffer },
        { name: "count", value: request.count },
        { name: "wechat_channels_account_id", value: request.wechatChannelsAccountId },
        { name: "ad_context", value: request.adContext },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


