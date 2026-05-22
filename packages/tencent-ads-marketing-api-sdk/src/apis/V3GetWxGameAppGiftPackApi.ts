// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GetWxGameAppGiftPackGetRequest, GetWxGameAppGiftPackGetResponseData } from "../models";

export interface V3GetWxGameAppGiftPackApiGetRequest {
  data: GetWxGameAppGiftPackGetRequest;
}


export class V3GetWxGameAppGiftPackApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3GetWxGameAppGiftPackApiGetRequest): Promise<GetWxGameAppGiftPackGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3GetWxGameAppGiftPackApiGetRequest): Promise<ApiResponse<GetWxGameAppGiftPackGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GetWxGameAppGiftPackGetResponseData>({
      method: "POST",
      path: "/get_wx_game_app_gift_pack/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


