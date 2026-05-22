// Generated from tencentad/marketing-api-go-sdk pkg/api/api_scene_spec_tags.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SceneSpecTagsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface SceneSpecTagsApiGetRequest {
  type_: string;
  accountId?: number | string;
  fields?: unknown;
}


export class SceneSpecTagsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: SceneSpecTagsApiGetRequest): Promise<SceneSpecTagsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: SceneSpecTagsApiGetRequest): Promise<ApiResponse<SceneSpecTagsGetResponseData>> {
    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SceneSpecTagsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/scene_spec_tags/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


