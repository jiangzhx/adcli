// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_barrage_recommend.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BarrageRecommendGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BarrageRecommendApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class BarrageRecommendApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BarrageRecommendApiGetRequest): Promise<BarrageRecommendGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BarrageRecommendApiGetRequest): Promise<ApiResponse<BarrageRecommendGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BarrageRecommendGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/barrage_recommend/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


