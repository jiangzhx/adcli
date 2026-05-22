// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_game_feature_tags.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { GameFeatureTagsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface GameFeatureTagsApiGetRequest {
  accountId: number | string;
  type_: string;
  fields?: unknown;
}


export class GameFeatureTagsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: GameFeatureTagsApiGetRequest): Promise<GameFeatureTagsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: GameFeatureTagsApiGetRequest): Promise<ApiResponse<GameFeatureTagsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<GameFeatureTagsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/game_feature_tags/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


