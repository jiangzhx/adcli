// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_get_wx_game_app_gift_pack.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GetWxGameAppGiftPackGetRequest, GetWxGameAppGiftPackGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface GetWxGameAppGiftPackApiGetRequest {
  data: GetWxGameAppGiftPackGetRequest;
}


export class GetWxGameAppGiftPackApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: GetWxGameAppGiftPackApiGetRequest): Promise<GetWxGameAppGiftPackGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: GetWxGameAppGiftPackApiGetRequest): Promise<ApiResponse<GetWxGameAppGiftPackGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GetWxGameAppGiftPackGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/get_wx_game_app_gift_pack/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


