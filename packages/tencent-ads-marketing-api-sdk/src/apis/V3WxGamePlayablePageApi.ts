// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WxGamePlayablePageGetResponseData } from "../models";

export interface V3WxGamePlayablePageApiGetRequest {
  accountId: number | string;
  appId: string;
  fields?: unknown;
}


export class V3WxGamePlayablePageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WxGamePlayablePageApiGetRequest): Promise<WxGamePlayablePageGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WxGamePlayablePageApiGetRequest): Promise<ApiResponse<WxGamePlayablePageGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WxGamePlayablePageGetResponseData>({
      method: "GET",
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


