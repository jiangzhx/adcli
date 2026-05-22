// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wx_game_playable_page.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WxGamePlayablePageGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WxGamePlayablePageApiGetRequest {
  accountId: number | string;
  appId: string;
  fields?: unknown;
}


export class WxGamePlayablePageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WxGamePlayablePageApiGetRequest): Promise<WxGamePlayablePageGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WxGamePlayablePageApiGetRequest): Promise<ApiResponse<WxGamePlayablePageGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WxGamePlayablePageGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wx_game_playable_page/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "app_id", value: request.appId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


